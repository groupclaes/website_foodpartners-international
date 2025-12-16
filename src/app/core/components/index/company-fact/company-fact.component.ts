import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'

@Component({
    selector: 'app-company-fact',
    templateUrl: './company-fact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe]
})
export class CompanyFactComponent {
  @Input() name: string | undefined
}
