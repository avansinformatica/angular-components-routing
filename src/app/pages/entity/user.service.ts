import { Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { User, UserRole } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, tap, mergeMap, take } from 'rxjs/operators';

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */
const httpOptions = {
  observe: 'body',
  responseType: 'json',
};

/**
 * LET OP: in dit voorbeeld mixen we twee benaderingen die NIET bij elkaar horen!
 * Ze staan hier alleen als voorbeeldcode. Doe dit dus NIET in je eigen project!
 *
 * Het localUsersArray is een lokaal array van User data. Die data zou eigenlijk
 * van een backend opgehaald moeten worden. Dat gebeurt ook in de getUsers()
 * functie: die praat tegen de ./cypress/plugins/mockserver.js, die bedoeld
 * is om de Cypress Integration tests te laten zien.
 *
 * Uiteindelijk zouden alle functies die data retourneren, die data op moeten halen
 * bij een backend API. Om dit codevoorbeeld klein te houden is het ophalen van
 * getUserById() uitgevoerd op het localUsersArray.
 */
const localUsersArray: User[] = [
  {
    id: 0,
    firstName: 'Eerste',
    lastName: 'User',
    emailAdress: 'usereen@host.com',
    role: UserRole.admin,
  },
  {
    id: 1,
    firstName: 'Tweede',
    lastName: 'User',
    emailAdress: 'usertwee@host.com',
    role: UserRole.editor,
  },
  {
    id: 2,
    firstName: 'Derde',
    lastName: 'User',
    emailAdress: 'userdrie@host.com',
    role: UserRole.guest,
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users!: User[];

  constructor(private readonly http: HttpClient) {
    console.log('Service constructor aangeroepen');
  }

  getUsers(options?: any): Observable<User[]> {
    console.log('getUsers aangeroepen');
    const endpoint = environment.SERVER_API_URL + '/users';
    console.log(`getUsers ${endpoint}`);
    return this.http
      .get<User[]>(endpoint, { ...options, ...httpOptions })
      .pipe(tap(console.log), catchError(this.handleError));
  }

  /**
   * Deze functie gebruikt het localUsersArray. Eigenlijk zou die
   * User opgehaald moeten worden bij de backend API.
   */
  getUserById(id: number, options?: any): User {
    console.log('getUserById aangeroepen');
    return localUsersArray.filter((user) => user.id === id)[0];
  }

  /**
   * Handle errors.
   */
  public handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);

    const errorResponse: any = {
      type: 'error',
      message: error.error.message || error.message,
    };
    // return an error observable with a user-facing error message
    return throwError(errorResponse);
  }
}
