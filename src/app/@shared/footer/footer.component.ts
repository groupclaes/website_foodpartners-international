import { environment } from 'src/environments/environment'
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core'
import { LocalizeRouterModule, LocalizeRouterService } from '@irector/ngx-translate-router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'
import { UpperCasePipe } from '@angular/common'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TranslateModule, LocalizeRouterModule, RouterLink, UpperCasePipe]
})
export class FooterComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private localizeRouter: LocalizeRouterService
  ) { }

  ngOnInit(): void {
  }

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
