import 'zone.js/dist/zone-node'

import { APP_BASE_HREF } from '@angular/common'
import { ngExpressEngine } from '@nguniversal/express-engine'
import * as express from 'express'
import { existsSync } from 'fs'
import { join } from 'path'
let fs = require('fs')

import { AppServerModule } from './src/main.server'

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express()
  const distFolder = join(process.cwd(), 'dist/browser')
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index'

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }))

  server.set('view engine', 'html')
  server.set('views', distFolder)

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { })
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }))

  const ngApp = (req: any, res: any) => {
    res.render(
      indexHtml,
      { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] },
      (err: Error, html: string) => {
        let status = 200

        if (html && html.includes('404-error')) {
          status = 404
        }

        if (html && html.includes('401-error')) {
          status = 401
        }

        if (!html) {
          status = 500
        }

        res.status(status).send(html || err.message)
      }
    )
  }

  let data: any = JSON.parse(fs.readFileSync(`dist/browser/assets/locales.json`, 'utf8'))

  // Default route with accept-language redirect
  server.get('/', (req: any, res: any) => {
    const defaultLang = 'nl'
    const lang = req.acceptsLanguages('nl', 'fr', 'de')

    const definedLang = lang || defaultLang

    res.redirect(301, `/${definedLang}/`)
  })

  // oad translated routes used by LocalizeRouter
  data.forEach((route: string) => {
    server.get(`/${route}`, ngApp)
    server.get(`/${route}/*`, ngApp)
  })

  // Fallback route to handle invalid root paths
  server.get('*', ngApp)

  return server
}

function run(): void {
  const port = process.env['PORT'] || 80

  // Start up the Node server
  const server = app()
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`)
  })
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire
const mainModule = __non_webpack_require__.main
const moduleFilename = mainModule && mainModule.filename || ''
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run()
}

export * from './src/main.server'
