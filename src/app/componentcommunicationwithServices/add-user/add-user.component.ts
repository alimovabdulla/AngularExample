import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  template: `<input type="text" placeholder="Name" #txtName />
    <button (click)="AddUser(txtName.value)">Add</button>`,
})
export class AddUserComponent {
  constructor(private userService: UserService) {}
  AddUser(name: string) {
    this.userService.AddUser(name);
  }
}
