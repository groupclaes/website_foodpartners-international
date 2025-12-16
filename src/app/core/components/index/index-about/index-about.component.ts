import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

@Component({
    selector: 'app-index-about',
    templateUrl: './index-about.component.html',
    standalone: true,
    imports: [TranslateModule]
})
export class IndexAboutComponent {
  constructor() { }
}
