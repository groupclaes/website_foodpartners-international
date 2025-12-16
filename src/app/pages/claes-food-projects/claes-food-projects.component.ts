import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { CompanyBannerComponent } from 'src/app/core/components/companies/company-banner/company-banner.component'
import { CompanyFactComponent } from 'src/app/core/components/companies/company-fact/company-fact.component'
import { CompanyHeaderComponent } from 'src/app/core/components/companies/company-header/company-header.component'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
    selector: 'app-claes-food-projects',
    templateUrl: './claes-food-projects.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe, CompanyBannerComponent, CompanyHeaderComponent, CompanyFactComponent]
})
export class ClaesFoodProjectsComponent {}
