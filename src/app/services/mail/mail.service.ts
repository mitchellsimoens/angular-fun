import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [
    { id: 0, text: 'message 1' },
    { id: 1, text: 'message 2' },
    { id: 2, text:  'message 3' }
  ];

  constructor() { }

  update (id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? { id, text }
        : m
    );
  }
}
