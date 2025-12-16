import { readFileSync } from 'fs';
import { ISitemapRoute } from "@groupclaes/fastify-elastic/plugins/sitemap"

import { environment } from "./environments/environment"
import { isMainModule } from '@angular/ssr/node';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

interface ILanguageRouteMap {
  [language: string]: {
    [route: string]: string
  }
}


export function getApplicationRoutes(): ISitemapRoute[] {
  const languageRoutes: ILanguageRouteMap = {};


  const assetsFolder = (isMainModule(import.meta.url))
    ? resolve(dirname(fileURLToPath(import.meta.url)), '../browser', 'assets')
    : 'public/assets'

  console.log(assetsFolder)

  for (const language of environment.supportedLanguages) {
    languageRoutes[language] = JSON.parse(readFileSync(`${assetsFolder}/i18n/${language}.json`, 'utf8')).ROUTES
  }

  const routes: ISitemapRoute[] = Object.entries(languageRoutes[environment.defaultLanguage])
      .map(x => ({
        path: x[0] === 'index' ? x[1] : ('/' + x[1]),
        language: environment.defaultLanguage,
        changeFrequency: "monthly",
        lastModified: new Date(), // Set the last modified date to the app start date
        translations: Object.entries(languageRoutes)
          .filter(y => y[0] !== environment.defaultLanguage)
          .filter(y => y[1][x[0]])
          .map(y => ({
            path: '/' + y[1][x[0]],
            language: y[0],
          }))
      }) as ISitemapRoute)

  return routes
}
