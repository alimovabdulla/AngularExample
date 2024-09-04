import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  template: `<ul><li *ngFor="let name of this.userService.users" >{{name}}</li></ul>`,
})
export class ListUserComponent {
  constructor(public userService: UserService) {}
}
