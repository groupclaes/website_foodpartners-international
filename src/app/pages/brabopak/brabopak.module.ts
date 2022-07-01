import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrabopakComponent } from './brabopak.component'
import { CompaniesModule } from 'src/app/core/components/companies/companies.module'

@NgModule({
  declarations: [
    BrabopakComponent
  ],
  imports: [
    CommonModule,
    CompaniesModule,
    RouterModule.forChild([
      {
        path: '',
        component: BrabopakComponent
      }
    ])
  ]
})
export class BrabopakModule { }
