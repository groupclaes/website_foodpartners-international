import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const translateLoaderFactory: () => TranslateLoader
  = () => new TranslateHttpLoader();
