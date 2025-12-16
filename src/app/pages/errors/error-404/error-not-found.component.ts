import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { RouterLink } from '@angular/router'
import { LocalizeRouterPipe } from '@irector/ngx-translate-router'

@Component({
    selector: 'app-error-not-found',
    templateUrl: './error-not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [RouterLink, LocalizeRouterPipe]
})
export class ErrorNotFoundComponent {
  constructor() { }
}
