import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';

const EXPORTED_DECLARATIONS = [
  ListComponent
];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
