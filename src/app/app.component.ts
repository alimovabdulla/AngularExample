import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomDirective } from './customdirectives/custom.directive';
import { StructuralDirective } from './customstructuraldirectives/structural.directive';
import { MypipePipe } from './custompipes/mypipe.pipe';
import { ParentComponent } from "./parenttochild/parent/parent.component";
import { ChildComponent } from "./parenttochild/child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomDirective, StructuralDirective, MypipePipe, ParentComponent, ChildComponent],
  template: `     `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Example';
}
