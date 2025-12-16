import { isPlatformServer } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Rewrites SSR HTTP requests that target the public base URL so they hit the local
 * Fastify instance instead of going through the external load balancer.
 */
@Injectable()
export class SsrLoopbackInterceptor implements HttpInterceptor {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const publicBase = environment.publicBase?.replace(/\/$/, '');
    const baseForRelative = publicBase ?? 'http://localhost';
    const resolvedUrl = req.url.startsWith('/')
      ? new URL(req.url, baseForRelative).toString()
      : req.url;
    const parsedUrl = new URL(resolvedUrl);
    const isLocalRedirect = environment.ssr.localRedirects?.some(url => url.startsWith('/')
      ? parsedUrl.pathname.startsWith(url)
      : resolvedUrl.startsWith(url)
    );

    if (!isPlatformServer(this.platformId) || !isLocalRedirect) {
      return next.handle(req);
    }

    const targetUrl = new URL(resolvedUrl);
    targetUrl.hostname = 'localhost';
    targetUrl.protocol = 'http:';

    const configuredPort = Number(process.env['PORT']);
    if (Number.isFinite(configuredPort)) {
      targetUrl.port = configuredPort.toString(10);
    } else if (!targetUrl.port) {
      targetUrl.port = '80';
    }

    return next.handle(req.clone({ url: targetUrl.toString() }));
  }
}
