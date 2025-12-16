import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core'
import { CompanyBannerComponent } from 'src/app/core/components/companies/company-banner/company-banner.component'
import { CompanyFactComponent } from 'src/app/core/components/companies/company-fact/company-fact.component'
import { CompanyHeaderComponent } from 'src/app/core/components/companies/company-header/company-header.component'
import { TranslateModule } from '@ngx-translate/core'

@Component({
    selector: 'app-claes-food-projects',
    templateUrl: './claes-food-projects.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslateModule, CompanyBannerComponent, CompanyHeaderComponent, CompanyFactComponent]
})
export class ClaesFoodProjectsComponent {}
