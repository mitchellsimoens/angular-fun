import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    { id: 0, name: 'Person A' },
    { id: 1, name: 'Person B' },
    { id: 2, name: 'Person C' }
  ];

  constructor() { }
}
