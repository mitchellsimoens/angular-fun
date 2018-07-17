import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { MailComponent } from './mail/mail.component';
import { UsersComponent } from './users/users.component';

import { routing } from './pages.routing';

const EXPORTED_DECLARATIONS = [
  HomeComponent,
  MailComponent,
  UsersComponent
];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    routing
  ]
})
export class PagesModule { }
