import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages;

  load () {
    const { messages } = this;

    if (messages) {
      return Promise.resolve(messages);
    } else {
      return fetch('data/messages.json')
        .then(response => response.json())
        .then(data => this.messages = data);
    }
  }

  update ({ id, text }) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? { id, text }
        : m
    );
  }

}
