import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {

  activeMessage;

  @Output() update = new EventEmitter();

  constructor (
    @Inject('mail') private mail
  ) {}

  onCancel () {
    this.activeMessage = null;
  }

  onClick (message) {
    this.activeMessage = Object.assign({}, message);
  }

  onUpdate (id, text) {
    this.mail.update(id, text);

    this.onCancel();
  }

}
