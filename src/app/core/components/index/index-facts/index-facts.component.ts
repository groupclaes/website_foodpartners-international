import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { CompanyFactsComponent } from '../company-facts/company-facts.component'

@Component({
    selector: 'app-index-facts',
    templateUrl: './index-facts.component.html',
    standalone: true,
    imports: [TranslatePipe, CompanyFactsComponent]
})
export class IndexFactsComponent { }
