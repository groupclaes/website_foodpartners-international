import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { RouterLink } from '@angular/router'
import { LocalizeRouterPipe } from '@irector/ngx-translate-router'
import { TranslateModule } from '@ngx-translate/core'

@Component({
    selector: 'app-index-header',
    templateUrl: './index-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslateModule, RouterLink, LocalizeRouterPipe]
})
export class IndexHeaderComponent {
  constructor() { }
}
