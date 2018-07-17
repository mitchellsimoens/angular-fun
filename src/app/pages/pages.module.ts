import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MailComponent } from './mail/mail.component';

const EXPORTED_DECLARATIONS = [
  MailComponent
];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
