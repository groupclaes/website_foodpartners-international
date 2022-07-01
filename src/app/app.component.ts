import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewEncapsulation } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { DOCUMENT } from '@angular/common'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, merge, map, mergeMap } from 'rxjs'
import { MetaService } from './@shared/services/meta.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(
    private _elementRef: ElementRef,
    private translateService: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.document.documentElement.lang = this.translateService.currentLang
  }

  ngOnInit() {
    this._elementRef.nativeElement.removeAttribute('ng-version')

    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    onNavigationEnd
      .pipe(
        map(() => {
          let route = this.activatedRoute
          while (route.firstChild) {
            route = route.firstChild
          }
          return route
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe((event: any) => {
        // { title: string, description?: string }
        const { title, description, keywords, image } = event
        if (title && description && keywords && image) {
          const tranlsations = this.translateService.instant([title, description, keywords, image])
          this.metaService.apply(tranlsations[title], tranlsations[description], tranlsations[keywords], tranlsations[image])
        }
      })
  }
}
