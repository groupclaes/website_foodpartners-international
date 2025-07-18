import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-company-banner',
    templateUrl: './company-banner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class CompanyBannerComponent implements OnInit {
  @Input() company: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  get banner(): string {
    return `/assets/images/banner-${this.company}.webp`
  }

  get logo(): string {
    if (this.company !== 'dumortier')
      return `/assets/images/logo-${this.company}_480x176.svg`
    return `/assets/images/logo-${this.company}.png`
  }
}
