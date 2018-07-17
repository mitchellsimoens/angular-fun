import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  isMouseDown;

  @Input() message;
  @Output() update = new EventEmitter();

}
