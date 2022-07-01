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
    return `/assets/images/logo-${this.name}.png`
  }
}
