import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
    selector: 'app-index-about',
    templateUrl: './index-about.component.html',
    standalone: true,
    imports: [TranslatePipe]
})
export class IndexAboutComponent { }
