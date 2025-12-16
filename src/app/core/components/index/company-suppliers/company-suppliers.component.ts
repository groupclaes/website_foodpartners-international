import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { CompanySupplierComponent } from '../company-supplier/company-supplier.component'

@Component({
    selector: 'app-company-suppliers',
    templateUrl: './company-suppliers.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslateModule, CompanySupplierComponent]
})
export class CompanySuppliersComponent {
  constructor() { }
}
