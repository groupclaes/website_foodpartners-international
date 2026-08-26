import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SystemBComponent } from './system-b.component'
import { CompaniesModule } from 'src/app/core/components/companies/companies.module'

@NgModule({
  declarations: [
    SystemBComponent
  ],
  imports: [
    CommonModule,
    CompaniesModule,
    RouterModule.forChild([
      {
        path: '',
        component: SystemBComponent
      }
    ])
  ]
})
export class SystemBModule { }
