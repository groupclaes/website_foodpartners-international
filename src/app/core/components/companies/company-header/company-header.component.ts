import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CompanyHeaderComponent {
  @Input() name: string | undefined

  constructor() { }

  get title(): string {
    return `core.components.companies.company-header.${this.name}.title`
  }
}
