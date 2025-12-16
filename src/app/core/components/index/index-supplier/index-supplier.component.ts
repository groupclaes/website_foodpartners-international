import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { CompanySuppliersComponent } from '../company-suppliers/company-suppliers.component'

@Component({
    selector: 'app-index-supplier',
    templateUrl: './index-supplier.component.html',
    standalone: true,
    imports: [TranslateModule, CompanySuppliersComponent]
})
export class IndexSupplierComponent {

  constructor() { }
}
