import {
  AngularNodeAppEngine,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node'

import Fastify from '@groupclaes/fastify-elastic'
import fastifyStatic from '@fastify/static'
import { environment } from './environments/environment';
import { getApplicationRoutes } from './server-sitemap';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';


export async function app() {
  const fastify = await Fastify({
    serviceName: 'www-fpi-production',
    fastify: {
      logger: {
        showUptime: false,
        ecs: {
          containerized: true
        }
      }
    },
    sitemap: {
      baseUrl: environment.publicBase,
      i18n: {
        prefix: true,
        prefixFormat: '/{{language}}'
      },
      routes: getApplicationRoutes()
    }
  });

  // Setup error/terminate handlers.
  ['SIGTERM', 'SIGINT'].forEach(signal =>
    process.on(signal,
      () => fastify?.close()
        .then(process.exit(0))))

  const serverDistFolder = dirname(fileURLToPath(import.meta.url))
  const browserDistFolder = resolve(serverDistFolder, '../browser')
  // Register static file handling
  fastify.register(fastifyStatic, {
    root: browserDistFolder,
    wildcard: false,
    maxAge: '1y'
  })


  const angularNodeAppEngine = new AngularNodeAppEngine();
  fastify.get('/service-worker.js', (req, reply) => {
    reply.header('Content-Type', 'application/json')
    return reply.code(200).send(`self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  self.registration.unregister()
    .then(function() {
      return self.clients.matchAll();
    })
    .then(function(clients) {
      clients.forEach(client => client.navigate(client.url))
    });
});`)

  })

  fastify.get('*', async (req, reply) => {
    try {
      const response = await angularNodeAppEngine.handle(req.raw)
      if (!response) {
        req.log.warn({
          event: {
            category: ['api', 'web'],
            type: ['info', 'error'],
            outcome: 'failure',
            reason: 'ssr_response_missing'
          },
          url: {
            original: req.originalUrl,
            full: req.raw.url
          },
          http: {
            request: {
              id: req.id,
              method: req.method,
              headers: req.headers
            }
          },
          client: {
            ip: req.ip
          }
        }, 'AngularNodeAppEngine returned no response; calling Fastify notFound')
        return reply.callNotFound()
      }

      reply.hijack()
      await writeResponseToNodeResponse(response, reply.raw)
    } catch (error) {
      reply.log.error({ error }, 'Something went wrong when processing request')
      if (!reply.sent) {
        reply.code(500).send('Internal Server Error');
      }
    }
  })

  return fastify
}

let fastifyInstance: any = null
const main = async function () {
  const fastify = await app()
  fastifyInstance = fastify

  const port = process.env['PORT'] && !Number.isNaN(+process.env['PORT']) ? +process.env['PORT'] : 80
  const host = process.env['HOST'] || '0.0.0.0'

  fastify.setErrorHandler((err: Error, req) => req.log.error( { error: err }, err.message))


  try {
  fastify.listen({ port, host },
    () => fastify.log.info(`Fastify server listening on http://${host}:${port}`))
  } catch (error) {
    fastify.log.error({ error }, 'Failed to start server')
    throw error
  }
}

if (isMainModule(import.meta.url)) {
  await main().catch((error) => {
    console.error('Failed to start Fastify server', error)
    process.exit(1)
  })
}
