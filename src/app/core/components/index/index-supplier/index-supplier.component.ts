import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { CompanySuppliersComponent } from '../company-suppliers/company-suppliers.component'

@Component({
    selector: 'app-index-supplier',
    templateUrl: './index-supplier.component.html',
    standalone: true,
    imports: [TranslatePipe, CompanySuppliersComponent]
})
export class IndexSupplierComponent { }
