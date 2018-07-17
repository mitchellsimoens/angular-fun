import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { MailComponent } from './mail/mail.component';
import { UsersComponent } from './users/users.component';

const EXPORTED_DECLARATIONS = [
  MailComponent,
  UsersComponent
];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class PagesModule { }
