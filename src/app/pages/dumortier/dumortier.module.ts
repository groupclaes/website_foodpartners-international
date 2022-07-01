import { CompaniesModule } from 'src/app/core/components/companies/companies.module'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DumortierComponent } from './dumortier.component'

@NgModule({
  declarations: [
    DumortierComponent
  ],
  imports: [
    CommonModule,
    CompaniesModule,
    RouterModule.forChild([
      {
        path: '',
        component: DumortierComponent
      }
    ])
  ]
})
export class DumortierModule { }
