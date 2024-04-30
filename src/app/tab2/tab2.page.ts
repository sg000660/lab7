import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  first_name!: string;
  last_name!: string;
  email!: string;
  defaultImageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-c12tnUug1e3DZJo0hUeGEuVE-UcY6SaKgmfH9bW2Q&s';
  constructor(private userService: UserService) {}

  addUser() {
    this.userService.addUser({ first_name: this.first_name, last_name: this.last_name, email: this.email,avatar: this.defaultImageUrl });
    this.first_name = '';
    this.last_name = '';
    this.email = '';
  }
}
