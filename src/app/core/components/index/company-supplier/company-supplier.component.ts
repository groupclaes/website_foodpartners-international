import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
    selector: 'app-company-supplier',
    templateUrl: './company-supplier.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe]
})
export class CompanySupplierComponent {
  @Input() name: string | undefined

  get supplierLogo(): string {
    if (this.name === 'packaging-partners')
      return `/assets/images/logo-${this.name}.svg`
    return `/assets/images/logo-${this.name}.png`
  }
}
