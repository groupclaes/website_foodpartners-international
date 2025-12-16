import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { CompanyTileComponent } from '../company-tile/company-tile.component'

@Component({
    selector: 'app-company-tiles',
    templateUrl: './company-tiles.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe, CompanyTileComponent]
})
export class CompanyTilesComponent { }
