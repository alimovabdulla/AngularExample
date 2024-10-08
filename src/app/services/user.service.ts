import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  AddUser(name: string) {
    this.names.push(name);
  }
  get users(): string[] {
    return this.names;
  }
  names: string[]=[''];
}
