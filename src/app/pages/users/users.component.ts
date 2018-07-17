import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor (
    @Inject('user') private user
  ) {}

  onDisclose () {
    console.log('hi');
  }

}
