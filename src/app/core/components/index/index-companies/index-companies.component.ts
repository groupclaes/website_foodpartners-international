import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { CompanyTilesComponent } from '../company-tiles/company-tiles.component'

@Component({
    selector: 'app-index-companies',
    templateUrl: './index-companies.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe, CompanyTilesComponent]
})
export class IndexCompaniesComponent { }
