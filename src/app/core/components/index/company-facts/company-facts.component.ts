import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-company-facts',
  templateUrl: './company-facts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CompanyFactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
