import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core'
import { appConfig } from './app.config'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { SsrLoopbackInterceptor } from './@shared/interceptors/ssr-loopback.interceptor'
import { environment } from 'src/environments/environment'
import { ssrFsTranslateLoaderFactory } from './@shared/translate/ssr-fs-translate-loader'
import { serverRoutes } from './app.routes.server'
import { provideServerRendering, withRoutes } from '@angular/ssr'
import { routingConfig } from './app.config.routing'

const serverConfig: ApplicationConfig = {
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SsrLoopbackInterceptor,
      multi: true
    },
    provideTranslateService({
      fallbackLang: environment.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useFactory: ssrFsTranslateLoaderFactory,
        deps: []
      }
    }),
  ]
}

const ssrConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
}


export const config = mergeApplicationConfig(appConfig, serverConfig, routingConfig, ssrConfig);