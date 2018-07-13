
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MailService } from './mail.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'user', useClass: UserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
