import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @ContentChild('itemTpl') itemTpl: TemplateRef<ElementRef>;
  @ContentChild('defaultTpl') defaultTpl: TemplateRef<ElementRef>;

  @Input() data;
  @Input() inline;
  @Input() disclose: boolean;

  @Output() itemdisclose = new EventEmitter();
  @Output() itemclick = new EventEmitter();

}
