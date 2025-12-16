import { environment } from 'src/environments/environment'
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'
import { Router, RouterLink } from '@angular/router'
import { UpperCasePipe } from '@angular/common'
import { LocalizeRouterPipe } from '@gilsdav/ngx-translate-router'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe, RouterLink, UpperCasePipe, LocalizeRouterPipe]
})
export class FooterComponent {

  constructor(private readonly translate: TranslateService) { }

  changeLanguage(language: string): void {
    this.translate.use(language)
  }

  get currentYear(): number {
    return new Date().getFullYear()
  }

  get culture(): string {
    return this.translate.getCurrentLang()
  }

  get languages(): string[] {
    return environment.supportedLanguages
  }
}
