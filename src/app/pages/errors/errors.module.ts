import { RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './error-404/error-not-found.component';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    ErrorNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ErrorNotFoundComponent
    }])
  ]
})
export class ErrorsModule { }
