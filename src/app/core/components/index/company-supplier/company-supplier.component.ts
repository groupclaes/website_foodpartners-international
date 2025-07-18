import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-company-supplier',
    templateUrl: './company-supplier.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class CompanySupplierComponent {
  @Input() name: string | undefined

  constructor() { }

  get supplierName(): string {
    return `core.components.index.company-supplier.${this.name}.name`
  }

  get supplierLogo(): string {
    if (this.name === 'packaging-partners')
      return `/assets/images/logo-${this.name}.svg`
    return `/assets/images/logo-${this.name}.png`
  }
}
