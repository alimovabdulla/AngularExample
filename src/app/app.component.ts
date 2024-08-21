import { Component } from '@angular/core';

 
import { ParentComponent } from './parenttochild/parent/parent.component';
import { ComponentAComponent } from "./componentlifecycle/component-a/component-a.component";
import { TemplateDrivenComponent } from "./Forms/template-driven/template-driven.component";
import { ReactiveFormComponent } from "./Forms/reactive-form/reactive-form.component";
import { StatusmethodsComponent } from "./changingthestatus/statusmethods/statusmethods.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ComponentAComponent, TemplateDrivenComponent, ReactiveFormComponent, StatusmethodsComponent],
  template: `<app-statusmethods></app-statusmethods>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Example';
}
