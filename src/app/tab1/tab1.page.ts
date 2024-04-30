import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.loadUsers();
    this.userService.userChanged.subscribe(() => {
      this.loadUsers();
    });
  }

  loadUsers() {
    const apiUsers = this.userService.loadUsersFromApi();
    const manualUsers = this.userService.getUsers();
    
    apiUsers.subscribe(apiUsers => {
      this.users = [...apiUsers, ...manualUsers];
    });
  }
  // removeUser(user: any) {
  //   this.userService.removeUser(user);
  // }
  removeUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1); 
      this.userService.removeUser(user); 
    }
  }

}
