import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomDirective } from './customdirectives/custom.directive';
import { StructuralDirective } from './customstructuraldirectives/structural.directive';
import { MypipePipe } from './custompipes/mypipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomDirective, StructuralDirective, MypipePipe],
  template: ` {{title | mypipe }} `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Example';
}
