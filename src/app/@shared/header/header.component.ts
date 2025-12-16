import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { RouterLink } from '@angular/router';
import { LocalizeRouterPipe } from '@irector/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [RouterLink, CommonModule, TranslateModule, LocalizeRouterPipe],
    standalone: true
})
export class HeaderComponent {
  constructor() { }
}
