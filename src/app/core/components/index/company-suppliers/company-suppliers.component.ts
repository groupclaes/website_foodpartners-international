import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-company-suppliers',
    templateUrl: './company-suppliers.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class CompanySuppliersComponent {
  constructor() { }
}
