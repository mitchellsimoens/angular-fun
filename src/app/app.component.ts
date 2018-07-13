import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';

  constructor (
    @Inject('mail') private mail
  ) {}

  onUpdate (id, text) {
    this.mail.update(id, text);
  }
}
