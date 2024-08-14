import { Component } from '@angular/core';

 
import { ParentComponent } from './parenttochild/parent/parent.component';
import { ComponentAComponent } from "./componentlifecycle/component-a/component-a.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ComponentAComponent],
  template: ` <app-component-a data="Salaam" >Yahh</app-component-a>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Example';
}
