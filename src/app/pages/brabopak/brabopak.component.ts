import { Component, OnInit } from '@angular/core'
import { CompanyBannerComponent } from 'src/app/core/components/companies/company-banner/company-banner.component'
import { CompanyFactComponent } from 'src/app/core/components/companies/company-fact/company-fact.component'
import { CompanyHeaderComponent } from 'src/app/core/components/companies/company-header/company-header.component'

@Component({
    selector: 'app-brabopak',
    templateUrl: './brabopak.component.html',
    standalone: true,
    imports: [CompanyBannerComponent, CompanyHeaderComponent, CompanyFactComponent]
})
export class BrabopakComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
