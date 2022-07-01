import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router'
import { TranslateModule } from '@ngx-translate/core';
import { CompanyHeaderComponent } from './company-header/company-header.component';
import { CompanyFactComponent } from './company-fact/company-fact.component'

@NgModule({
  declarations: [
    CompanyHeaderComponent,
    CompanyFactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LocalizeRouterModule,
    TranslateModule.forChild()
  ],
  exports: [
    CompanyHeaderComponent,
    CompanyFactComponent
  ]
})
export class CompaniesModule { }
