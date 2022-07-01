import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IndexComponent } from './index.component'
import { RouterModule } from '@angular/router'
import { IndexComponentsModule } from 'src/app/core/components/index/index.module'

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexComponentsModule,
    RouterModule.forChild([{
      path: '',
      component: IndexComponent
    }])
  ]
})
export class IndexModule { }
