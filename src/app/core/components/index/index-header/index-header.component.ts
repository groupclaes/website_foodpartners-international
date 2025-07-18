import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-index-header',
    templateUrl: './index-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class IndexHeaderComponent {
  constructor() { }
}
