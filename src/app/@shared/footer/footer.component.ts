import { environment } from 'src/environments/environment'
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { LocalizeRouterModule, LocalizeRouterService } from '@irector/ngx-translate-router'
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'
import { UpperCasePipe } from '@angular/common'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslatePipe, TranslateModule, LocalizeRouterModule, RouterLink, UpperCasePipe]
})
export class FooterComponent {

  constructor(
    private readonly translate: TranslateService,
    private readonly localizeRouter: LocalizeRouterService
  ) { }

  changeLanguage(language: string): void {
    this.localizeRouter.changeLanguage(language)
  }

  get currentYear(): number {
    return new Date().getFullYear()
  }

  get culture(): string {
    return this.translate.currentLang
  }

  get languages(): string[] {
    return environment.supportedLanguages
  }
}
