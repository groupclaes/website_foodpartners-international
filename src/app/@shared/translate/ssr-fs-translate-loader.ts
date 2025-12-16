import { isMainModule } from "@angular/ssr/node";
import { TranslateLoader, TranslationObject } from "@ngx-translate/core";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

const I18N_FOLDER = (isMainModule(import.meta.url))
  ? resolve(dirname(fileURLToPath(import.meta.url)), '../browser', 'assets', 'i18n')
  : 'public/assets/i18n'


export class SsrFsTranslateLoader implements TranslateLoader {

  getTranslation(lang: string): Observable<TranslationObject> {
    const contents = JSON.parse(readFileSync(`${I18N_FOLDER}/${lang}.json`, 'utf8'));

    if (lang !== environment.defaultLanguage) {
      // Merge the defaults into the translation
      const defaultContents = JSON.parse(readFileSync(`${I18N_FOLDER}/${environment.defaultLanguage}.json`, 'utf8'));

      return of(Object.assign(defaultContents, contents))
    }

    return of(contents);
  }
}

export function ssrFsTranslateLoaderFactory() {
  return new SsrFsTranslateLoader();
}

