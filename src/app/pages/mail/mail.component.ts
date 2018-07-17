import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  @Output() update = new EventEmitter();

  constructor (
    @Inject('mail') private mail
  ) {}

  onUpdate (id, text) {
    this.mail.update(id, text);
  }

}
