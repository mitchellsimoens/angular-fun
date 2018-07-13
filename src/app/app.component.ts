import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    @Inject('mail') private mail,
    @Inject('user') private user
  ) {}

  onUpdate (id, text) {
    this.mail.update(id, text);
  }

  onDisclose (item) {
    console.log(item);
  }
}
