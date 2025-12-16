import { ApplicationConfig } from "@angular/core";
import { provideRouter, withDisabledInitialNavigation, withInMemoryScrolling } from "@angular/router";
import { environment } from "src/environments/environment";
import { routes } from "./app.routes";
import { LocalizeParser, LocalizeRouterSettings, ManualParserLoader, withLocalizeRouter } from "@gilsdav/ngx-translate-router";
import { TranslateService } from "@ngx-translate/core";
import { Location } from "@angular/common";

function localizeLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings) {
  return new ManualParserLoader(translate, location, settings, environment.supportedLanguages, 'routes.', '!')
}

export const routingConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      }),
      withDisabledInitialNavigation(),
      withLocalizeRouter(routes, { // <--
        parser: {
          provide: LocalizeParser,
          useFactory: (localizeLoaderFactory),
          deps: [TranslateService, Location, LocalizeRouterSettings]
        },
        alwaysSetPrefix: true,
        initialNavigation: true
      })
    )
  ]
}