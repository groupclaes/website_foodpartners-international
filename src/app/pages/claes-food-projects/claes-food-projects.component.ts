import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-claes-food-projects',
    templateUrl: './claes-food-projects.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class ClaesFoodProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
