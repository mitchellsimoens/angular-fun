import { Component, ContentChild, ElementRef, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @ContentChild('template') template: TemplateRef<ElementRef>;

  @Input() data;
  @Input() inline;
  @Input() disclose: boolean;

  @Output() discloser = new EventEmitter();
  @Output() itemclick = new EventEmitter();

}
