import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'
@Component({
  selector: 'app-company-tile',
  templateUrl: './company-tile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CompanyTileComponent {
  @Input() name: string | undefined

  constructor() { }

  get routerLink(): any[] {
    return [this.name]
  }

  get companyName(): string {
    return `core.components.index.company-tile.${this.name}.name`
  }

  get companyLogo(): string {
    if (this.name === 'claes-food-projects' || this.name === 'brabopak')
      return `/assets/images/logo-${this.name}_480x176.svg`
    return `/assets/images/logo-${this.name}.png`
  }

  get srcSet(): string | undefined {
    if (this.name === 'claes-food-projects' || this.name === 'brabopak')
      return `/assets/images/logo-${this.name}_640x235.svg 2000w, /assets/images/logo-${this.name}_480x176.svg 100w`
    return undefined
  }
}
