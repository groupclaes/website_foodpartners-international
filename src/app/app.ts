import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewEncapsulation, DOCUMENT } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { filter, map, mergeMap } from 'rxjs'
import { FooterComponent } from './@shared/footer/footer.component'
import { HeaderComponent } from './@shared/header/header.component'
import { MetaService } from './@shared/services/meta.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class App implements OnInit {
  constructor(
    private readonly _elementRef: ElementRef,
    private readonly translateService: TranslateService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly metaService: MetaService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.document.documentElement.lang = this.translateService.getCurrentLang()
  }

  ngOnInit() {
    this._elementRef.nativeElement.removeAttribute('ng-version')

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['font']) {
        if (document) {
          document.documentElement.classList.add(params['font'])
        }
      }
    })

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
          const translations = this.translateService.instant([title, description, keywords, image])
          this.metaService.apply(translations[title], translations[description], translations[keywords], translations[image])
        }
      })
  }
}
