import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-company-fact',
  templateUrl: './company-fact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CompanyFactComponent {
  @Input() name: string | undefined

  constructor(
    private translate: TranslateService
  ) {
  }

  get factName(): string {
    return `core.components.index.company-fact.${this.name}.name`
  }

  get factValue(): string {
    return `core.components.index.company-fact.${this.name}.value`
  }

  get factIcon(): string {
    return this.translate.instant(`core.components.index.company-fact.${this.name}.icon`)
  }
}
