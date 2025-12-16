import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { CompanyFactsComponent } from '../company-facts/company-facts.component'

@Component({
    selector: 'app-index-facts',
    templateUrl: './index-facts.component.html',
    standalone: true,
    imports: [TranslateModule, CompanyFactsComponent]
})
export class IndexFactsComponent {
  constructor() { }
}
