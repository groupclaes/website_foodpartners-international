import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { CompanyTileComponent } from '../company-tile/company-tile.component'

@Component({
    selector: 'app-company-tiles',
    templateUrl: './company-tiles.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslateModule, CompanyTileComponent]
})
export class CompanyTilesComponent {
  constructor() { }
}
