import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  host: {
    class: 'flex flex-col md:flex-row flex-auto justify-center items-center h-full'
  }
})
export class App {
  protected readonly title = signal('www')
}
