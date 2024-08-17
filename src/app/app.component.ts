import { Component } from '@angular/core';

 
import { ParentComponent } from './parenttochild/parent/parent.component';
import { ComponentAComponent } from "./componentlifecycle/component-a/component-a.component";
import { TemplateDrivenComponent } from "./Forms/template-driven/template-driven.component";
import { ReactiveFormComponent } from "./Forms/reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ComponentAComponent, TemplateDrivenComponent, ReactiveFormComponent],
  template: `<app-reactive-form></app-reactive-form>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Example';
}
