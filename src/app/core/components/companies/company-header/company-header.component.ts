import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'

@Component({
    selector: 'app-company-header',
    templateUrl: './company-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ TranslatePipe ]
})
export class CompanyHeaderComponent {
  @Input() name: string | undefined

  constructor(private readonly translate: TranslateService) { }

  get link(): string | undefined {
    const url = this.translate.instant(`core.components.companies.company-header.${this.name}.link`)
    if (url === `core.components.companies.company-header.${this.name}.link`)
      return undefined
    return url
  }

  get texts(): string[] {
    const arr = this.translate.instant(`core.components.companies.company-header.${this.name}.texts`)
    return Array.isArray(arr) ? arr : [arr]
  }
}
