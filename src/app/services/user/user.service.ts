import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'data/users.json';

  users;

  constructor(
    private http: HttpClient
  ) { }

  load () {
    const { users } = this;

    if (users) {
      return Promise.resolve(users);
    } else {
      return this.http
        .get(this.usersUrl)
        .pipe(
          tap(data => this.log('fetched messages')),
          catchError(this.handleError('load', []))
        );
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: String) {
    console.log(`UserService: ${message}`);
  }

}
