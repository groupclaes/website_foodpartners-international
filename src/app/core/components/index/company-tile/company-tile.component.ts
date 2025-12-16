import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'
import { RouterLink } from '@angular/router'
import { LocalizeRouterPipe } from '@gilsdav/ngx-translate-router'
import { TranslatePipe } from '@ngx-translate/core'
@Component({
    selector: 'app-company-tile',
    templateUrl: './company-tile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [RouterLink, TranslatePipe, LocalizeRouterPipe]
})
export class CompanyTileComponent {
  @Input() name: string | undefined

  get companyLogo(): string {
    if (this.name !== 'dumortier')
      return `/assets/images/logo-${this.name}_480x176.svg`
    return `/assets/images/logo-${this.name}.png`
  }

  get srcSet(): string | undefined {
    if (this.name !== 'dumortier')
      return `/assets/images/logo-${this.name}_640x235.svg 2000w, /assets/images/logo-${this.name}_480x176.svg 100w`
    return `/assets/images/logo-${this.name}.png`
  }
}
