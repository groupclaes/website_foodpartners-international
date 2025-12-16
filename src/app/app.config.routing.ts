import { ApplicationConfig } from "@angular/core";
import { provideRouter, withDisabledInitialNavigation, withInMemoryScrolling } from "@angular/router";
import { routes } from "./app.routes";
import { LocalizeParser, LocalizeRouterSettings, ManualParserLoader, withLocalizeRouter } from "@irector/ngx-translate-router";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { Location } from "@angular/common";


function localizeLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings) {
  return new ManualParserLoader(translate, location, settings, environment.supportedLanguages, 'ROUTES.', '!')
}

export const routingConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withDisabledInitialNavigation(),
      withLocalizeRouter(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: (localizeLoaderFactory),
          deps: [TranslateService, Location, LocalizeRouterSettings]
        },
        initialNavigation: true
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      }),
    )
  ]
}