import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-index-companies',
    templateUrl: './index-companies.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class IndexCompaniesComponent {
  constructor() { }
}
