import { Component } from '@angular/core';

 
import { ParentComponent } from './parenttochild/parent/parent.component';
import { ComponentAComponent } from "./componentlifecycle/component-a/component-a.component";
import { TemplateDrivenComponent } from "./Forms/template-driven/template-driven.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ComponentAComponent, TemplateDrivenComponent],
  template: `<app-template-driven></app-template-driven>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Example';
}
