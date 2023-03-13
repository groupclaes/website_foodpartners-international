import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'

import { AppModule } from './app.module'
import { AppComponent } from './app.component'
import { translateServerLoaderFactory } from './@shared/loaders/translate-server.loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'


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
