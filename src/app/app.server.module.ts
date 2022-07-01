import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'
import { Location } from '@angular/common'

import { AppModule } from './app.module'
import { AppComponent } from './app.component'
import { translateServerLoaderFactory } from './@shared/loaders/translate-server.loader'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { LocalizeRouterSettings, ManualParserLoader } from '@gilsdav/ngx-translate-router'
import { environment } from 'src/environments/environment'

export function localizeLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings) {
  return new ManualParserLoader(translate, location, settings, environment.supportedLanguages, 'ROUTES')
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      useDefaultLang: false,
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: []
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
