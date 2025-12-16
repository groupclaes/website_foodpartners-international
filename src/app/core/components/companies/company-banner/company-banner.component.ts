
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-company-banner',
    templateUrl: './company-banner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true
})
export class CompanyBannerComponent {
  @Input() company: string | undefined

  get banner(): string {
    return `/assets/images/banner-${this.company}.webp`
  }

  get logo(): string {
    if (this.company !== 'dumortier')
      return `/assets/images/logo-${this.company}_480x176.svg`
    return `/assets/images/logo-${this.company}.png`
  }
}
