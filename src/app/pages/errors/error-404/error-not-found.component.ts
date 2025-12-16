import { LocalizeRouterPipe } from '@gilsdav/ngx-translate-router';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-error-not-found',
    templateUrl: './error-not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [RouterLink, LocalizeRouterPipe]
})
export class ErrorNotFoundComponent {}
