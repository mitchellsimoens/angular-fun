import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  isMouseDown;

  @Input() message;
  @Output() update = new EventEmitter();

}
