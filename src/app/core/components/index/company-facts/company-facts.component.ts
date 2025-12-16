import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { CompanyFactComponent } from '../company-fact/company-fact.component'

@Component({
    selector: 'app-company-facts',
    templateUrl: './company-facts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [CompanyFactComponent]
})
export class CompanyFactsComponent { }
