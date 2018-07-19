import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data;

  constructor (
    @Inject('user') private user
  ) {}

  ngOnInit () {
    this.user
      .load()
      .then(data => this.data = data);
  }

  onDisclose () {
    console.log('hi');
  }

}
