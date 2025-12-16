import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

@Component({
    selector: 'app-index-sofindev',
    templateUrl: './index-sofindev.component.html',
    styles: [
        ':host { display: block }'
    ],
    standalone: true,
    imports: [TranslateModule]
})
export class IndexSofindevComponent {
  constructor() { }
}
