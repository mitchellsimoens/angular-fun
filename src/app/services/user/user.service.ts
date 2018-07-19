import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users;

  load () {
    const { users } = this;

    if (users) {
      return Promise.resolve(users);
    } else {
      return fetch('data/users.json')
        .then(response => response.json())
        .then(data => this.users = data);
    }
  }

}
