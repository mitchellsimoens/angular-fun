import {
  Component, EventEmitter, Inject, Output,
  AfterContentChecked, OnInit,
  ViewChild, ElementRef, Renderer
} from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements AfterContentChecked, OnInit {

  activeMessage;
  data;
  hasActiveInput: Boolean;

  @Output() update = new EventEmitter();

  @ViewChild('cancelButtonEl') cancelButtonEl: ElementRef;
  @ViewChild('mailUpdateEl') mailUpdateEl: ElementRef;
  @ViewChild('saveButtonEl') saveButtonEl: ElementRef;

  constructor (
    @Inject('mail') private mail,
    private renderer: Renderer
  ) {}

  ngOnInit () {
    this.mail
      .load()
      .subscribe(data => this.data = data);
  }

  ngAfterContentChecked () {
    const { hasActiveInput } = this;
    const newHasActiveInput = Boolean(this.mailUpdateEl);

    if (!hasActiveInput && newHasActiveInput) {
      this.renderer.invokeElementMethod(
        this.mailUpdateEl.nativeElement,
        'focus'
      );
    }

    this.hasActiveInput = newHasActiveInput;
  }

  onBlur ({ relatedTarget }) {
    if (relatedTarget) {
      const { cancelButtonEl, saveButtonEl } = this;

      if (
        // if the new target is the cancel button, don't do anything so the button handles it
        relatedTarget === cancelButtonEl.nativeElement ||
        // if the new target is the save button, don't do anything so the button handles it
        relatedTarget === saveButtonEl.nativeElement
      ) {
        return;
      }
    }

    // wasn't any of the buttons so let's cancel!
    this.onCancel();
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
