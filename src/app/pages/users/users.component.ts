import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor (
    @Inject('user') private user
  ) {}

  onDisclose () {
    console.log('hi');
  }

}
