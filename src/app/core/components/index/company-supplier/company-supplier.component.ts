import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-company-supplier',
  templateUrl: './company-supplier.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CompanySupplierComponent {
  @Input() name: string | undefined

  constructor() { }

  get supplierName(): string {
    return `core.components.index.company-supplier.${this.name}.name`
  }

  get supplierLogo(): string {
    return `/assets/images/logo-${this.name}.png`
  }
}
