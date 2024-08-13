import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: ``,
})
export class ChildComponent {
  @Input() dta: string  ;
}
