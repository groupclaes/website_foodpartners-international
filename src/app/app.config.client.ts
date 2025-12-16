import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideTranslateService } from '@ngx-translate/core'
import { environment } from 'src/environments/environment'
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader'
import { appConfig } from './app.config'
import { routingConfig } from './app.config.routing'

const clientConfig: ApplicationConfig = {
  providers: [
    provideTranslateService({
      defaultLanguage: environment.defaultLanguage,
      fallbackLang: environment.defaultLanguage,
      loader: provideTranslateHttpLoader()
    })
  ]
};


export const config = mergeApplicationConfig(appConfig, clientConfig, routingConfig);