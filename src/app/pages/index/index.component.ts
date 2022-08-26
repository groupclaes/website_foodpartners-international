import { ActivatedRoute, Params } from '@angular/router';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent {
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((param: Params) => {
      setTimeout(() => {
        if (param['section']) {
          document.getElementById(param['section'])?.scrollIntoView()
        }
      }, 80)
    })
  }
}
