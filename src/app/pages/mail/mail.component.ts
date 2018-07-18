import {
  Component, EventEmitter, Inject, Output,
  AfterContentChecked,
  ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements AfterContentChecked {

  activeMessage;
  hasActiveInput: Boolean;

  @Output() update = new EventEmitter();

  @ViewChild('mailUpdateEl') mailUpdateEl: ElementRef;

  constructor (
    @Inject('mail') private mail
  ) {}

  ngAfterContentChecked () {
    const { hasActiveInput } = this;
    const newHasActiveInput = Boolean(this.mailUpdateEl);

    if (!hasActiveInput && newHasActiveInput) {
      const { nativeElement } = this.mailUpdateEl;

      nativeElement.focus();
    }

    this.hasActiveInput = newHasActiveInput;
  }

  onCancel () {
    this.activeMessage = null;
  }

  onClick (message) {
    this.activeMessage = Object.assign({}, message);
  }

  onKeyPress (message, event) {
    switch (event.keyCode) {
      // ENTER
      case 13:
        this.onUpdate(message);

        break;
      // ESC
      case 27:
        this.onCancel();

        break;
    }
  }

  onUpdate (message) {
    this.mail.update(message);

    this.onCancel();
  }

}
