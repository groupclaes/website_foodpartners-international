import { enableProdMode } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { App } from './app/app'
import { config } from './app/app.config.client'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(App, config)
  .catch(err => console.error(err))
