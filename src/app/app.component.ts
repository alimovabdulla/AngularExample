import { Component } from '@angular/core';

 
import { ParentComponent } from './parenttochild/parent/parent.component';
import { ComponentAComponent } from "./componentlifecycle/component-a/component-a.component";
import { TemplateDrivenComponent } from "./Forms/template-driven/template-driven.component";
import { ReactiveFormComponent } from "./Forms/reactive-form/reactive-form.component";
import { StatusmethodsComponent } from "./changingthestatus/statusmethods/statusmethods.component";
import { ComponentforDItestComponent } from './dependency/componentfor-ditest/componentfor-ditest.component';
import { AddUserComponent } from "./componentcommunicationwithServices/add-user/add-user.component";
import { ListUserComponent } from "./componentcommunicationwithServices/list-user/list-user.component";
 
 
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
    ComponentforDItestComponent,
    AddUserComponent,
    ListUserComponent
],
  template: ` <app-add-user></app-add-user> <app-list-user></app-list-user> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Example';
}
