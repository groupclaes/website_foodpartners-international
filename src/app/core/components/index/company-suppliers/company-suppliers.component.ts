import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { CompanySupplierComponent } from '../company-supplier/company-supplier.component'

@Component({
    selector: 'app-company-suppliers',
    templateUrl: './company-suppliers.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe, CompanySupplierComponent]
})
export class CompanySuppliersComponent {
}
