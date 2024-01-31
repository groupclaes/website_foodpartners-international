import { TranslateService } from '@ngx-translate/core'
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-company-fact',
  templateUrl: './company-fact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CompanyFactComponent implements OnInit {
  @Input() public company: string | undefined
  @Input() public name: string | undefined

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  get icon(): string {
    switch (this.name) {
      case 'locations':
        return 'fa-map-marker-alt'

      case 'management':
        return 'fa-directions'

      case 'founding':
        return 'fa-rocket'

      case 'team':
        return 'fa-users'

      default:
        return ''
    }
  }

  get texts(): string[] {
    const arr = this.translate.instant(`core.components.companies.company-fact.${this.name}.${this.company}`)
    if (arr instanceof Array) return arr
    return [arr]
  }
}
