import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomDirective } from './customdirectives/custom.directive';
import { StructuralDirective } from './customstructuraldirectives/structural.directive';
import { MypipePipe } from './custompipes/mypipe.pipe';
import { ParentComponent2 } from './childtoparent/parent2/parent2.component';
import { ChildComponent2 } from './childtoparent/child2/child2.component'; // Düzgün ad və yol

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomDirective,
    StructuralDirective,
    MypipePipe,
    ParentComponent2,
    ChildComponent2,
  ],
  template: `<app-parent2></app-parent2>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Example';
}
