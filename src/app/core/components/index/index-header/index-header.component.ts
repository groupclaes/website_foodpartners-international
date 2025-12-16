import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { RouterLink } from '@angular/router'
import { LocalizeRouterPipe } from '@gilsdav/ngx-translate-router'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
    selector: 'app-index-header',
    templateUrl: './index-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe, RouterLink, LocalizeRouterPipe]
})
export class IndexHeaderComponent { }
