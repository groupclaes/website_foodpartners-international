import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
    selector: 'app-index-sofindev',
    templateUrl: './index-sofindev.component.html',
    host: {
      style: 'display: block'
    },
    standalone: true,
    imports: [TranslatePipe]
})
export class IndexSofindevComponent {
  constructor() { }
}
