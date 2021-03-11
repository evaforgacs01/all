import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  userList: User[] = this.userService.list;
  currentUser: User = new User;
  // @Output() selectUser: EventEmitter<User> = new EventEmitter();
  // @Output() updateUser: EventEmitter<User> = new EventEmitter();
  // @Output() deleteUser: EventEmitter<User> = new EventEmitter();


  constructor(
    private userService: UserService,
  ) {

  }
  onSelectUser(user: User): void {
    this.currentUser = user;
    // this.selectUser.emit();
  }
  onUpdateUser(user: User): void {
    this.userService.updateUser(user);
    // this.updateUser.emit();
  }

  onDeleteUser(user: User): void {
    this.userService.removeUser(user);
    // this.deleteUser.emit();
  }

}
