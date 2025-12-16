import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function translateLoaderFactory(): TranslateLoader {
  return new TranslateHttpLoader();
}
