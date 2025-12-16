import { ChangeDetectionStrategy, Component, DOCUMENT, Inject, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { IndexAboutComponent } from 'src/app/core/components/index/index-about/index-about.component'
import { IndexCompaniesComponent } from 'src/app/core/components/index/index-companies/index-companies.component'
import { IndexFactsComponent } from 'src/app/core/components/index/index-facts/index-facts.component'
import { IndexHeaderComponent } from 'src/app/core/components/index/index-header/index-header.component'
import { IndexSofindevComponent } from 'src/app/core/components/index/index-sofindev/index-sofindev.component'
import { IndexSupplierComponent } from 'src/app/core/components/index/index-supplier/index-supplier.component'

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
      IndexHeaderComponent,
      IndexCompaniesComponent,
      IndexSupplierComponent,
      IndexAboutComponent,
      IndexSofindevComponent,
      IndexFactsComponent
    ]
})
export class IndexComponent {
  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {
    this.route.queryParams.subscribe((param: Params) => {
      setTimeout(() => {
        if (param['section']) {
          document.getElementById(param['section'])?.scrollIntoView()
        }
      }, 80)
    })
  }
}
