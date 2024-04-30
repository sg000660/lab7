import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];
  userChanged = new Subject<void>();

  constructor(private http: HttpClient) {}

  getUsers(): any[] {
    return this.users;
  }

  setUsers(users: any[]) {
    this.users = [...this.users, ...users];
    this.userChanged.next();
  }

  addUser(user: any) {
    this.users.push(user);
    this.userChanged.next();
  }
  removeUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.userChanged.next();
    }
  }
  loadUsersFromApi() {
    return this.http.get<any>('https://reqres.in/api/users').pipe(
      map(response => response.data)
    );
  }
}
