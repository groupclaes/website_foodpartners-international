import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { CompanyTilesComponent } from '../company-tiles/company-tiles.component'

@Component({
    selector: 'app-index-companies',
    templateUrl: './index-companies.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslateModule, CompanyTilesComponent]
})
export class IndexCompaniesComponent {
  constructor() { }
}
