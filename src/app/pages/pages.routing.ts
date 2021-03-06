import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MailComponent } from './mail/mail.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mail', component: MailComponent },
  { path: 'users', component: UsersComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
