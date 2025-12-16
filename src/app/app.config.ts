import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi(), withFetch())
  ]
}
