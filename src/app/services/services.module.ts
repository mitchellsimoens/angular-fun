import { NgModule } from '@angular/core';

import { MailService } from './mail/mail.service';
import { UserService } from './user/user.service';

@NgModule({
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'user', useClass: UserService }
  ]
})
export class ServicesModule { }
