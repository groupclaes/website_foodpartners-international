import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeidelcoComponent } from './weidelco.component'
import { CompaniesModule } from 'src/app/core/components/companies/companies.module'

@NgModule({
  declarations: [
    WeidelcoComponent
  ],
  imports: [
    CommonModule,
    CompaniesModule,
    RouterModule.forChild([
      {
        path: '',
        component: WeidelcoComponent
      }
    ])
  ]
})
export class WeidelcoModule { }
