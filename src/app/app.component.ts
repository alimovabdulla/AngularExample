import { Component } from '@angular/core';

 
import { ParentComponent } from './parenttochild/parent/parent.component';
import { ComponentAComponent } from "./componentlifecycle/component-a/component-a.component";
import { TemplateDrivenComponent } from "./Forms/template-driven/template-driven.component";
import { ReactiveFormComponent } from "./Forms/reactive-form/reactive-form.component";
import { StatusmethodsComponent } from "./changingthestatus/statusmethods/statusmethods.component";
import { ComponentforDItestComponent } from './dependency/componentfor-ditest/componentfor-ditest.component';
 
 
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [
    ParentComponent,
    ComponentAComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    StatusmethodsComponent,
    ComponentforDItestComponent
  ],
  template: `<app-componentfor-ditest></app-componentfor-ditest> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Example';
}
