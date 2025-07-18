import { SharedModule } from './@shared/@shared.module'
import { environment } from 'src/environments/environment'
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { APP_ID, NgModule } from '@angular/core'
import { Location } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { translateBrowserLoaderFactory } from './@shared/loaders/translate-browser.loader'

import { AppComponent } from './app.component'
import { AppRoutingModule, routes } from './app-routing.module'
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings, ManualParserLoader } from '@gilsdav/ngx-translate-router'

export function localizeLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings) {
    return new ManualParserLoader(translate, location, settings, environment.supportedLanguages, 'ROUTES.', '!')
}

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        TranslateModule.forRoot({
            useDefaultLang: false,
            loader: {
                provide: TranslateLoader,
                useFactory: translateBrowserLoaderFactory,
                deps: [HttpClient]
            }
        }),
        LocalizeRouterModule.forRoot([...routes, {
            path: '**',
            loadChildren: () => import('./pages/errors/errors.module').then(m => m.ErrorsModule)
        }], {
            cacheName: 'language',
            useCachedLang: false,
            parser: {
                provide: LocalizeParser,
                useFactory: localizeLoaderFactory,
                deps: [TranslateService, Location, LocalizeRouterSettings]
            }
        })
    ],
    providers: [
        { provide: APP_ID, useValue: 'serverApp' },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
