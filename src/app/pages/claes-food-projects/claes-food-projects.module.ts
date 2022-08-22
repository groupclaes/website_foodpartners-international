import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaesFoodProjectsComponent } from './claes-food-projects.component';
import { CompaniesModule } from 'src/app/core/components/companies/companies.module';

@NgModule({
  declarations: [
    ClaesFoodProjectsComponent
  ],
  imports: [
    CommonModule,
    CompaniesModule,
    TranslateModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: ClaesFoodProjectsComponent
      }
    ])
  ]
})
export class ClaesFoodProjectsModule { }
