import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IndexHeaderComponent } from './index-header/index-header.component'
import { IndexCompaniesComponent } from './index-companies/index-companies.component'
import { CompanyTilesComponent } from './company-tiles/company-tiles.component'
import { CompanyTileComponent } from './company-tile/company-tile.component'
import { IndexSupplierComponent } from './index-supplier/index-supplier.component'
import { IndexAboutComponent } from './index-about/index-about.component'
import { IndexSofindevComponent } from './index-sofindev/index-sofindev.component'
import { IndexFactsComponent } from './index-facts/index-facts.component'
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { CompanyFactsComponent } from './company-facts/company-facts.component';
import { CompanyFactComponent } from './company-fact/company-fact.component';
import { CompanySuppliersComponent } from './company-suppliers/company-suppliers.component';
import { CompanySupplierComponent } from './company-supplier/company-supplier.component'

@NgModule({
  declarations: [
    IndexHeaderComponent,
    IndexCompaniesComponent,
    CompanyTilesComponent,
    CompanyTileComponent,
    IndexSupplierComponent,
    IndexAboutComponent,
    IndexSofindevComponent,
    IndexFactsComponent,
    CompanyFactsComponent,
    CompanyFactComponent,
    CompanySuppliersComponent,
    CompanySupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LocalizeRouterModule,
    TranslateModule.forChild()
  ],
  exports: [
    IndexHeaderComponent,
    IndexCompaniesComponent,
    IndexSupplierComponent,
    IndexAboutComponent,
    IndexSofindevComponent,
    IndexFactsComponent
  ]
})
export class IndexComponentsModule { }
