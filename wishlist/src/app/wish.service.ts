import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { Wish } from '../shared/models/Wish';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private readonly DEFAULT_OPTIONS: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getWishes() {
    let options: any = this.DEFAULT_OPTIONS;

    options.params = new HttpParams({ fromObject: { format: 'json' } });

    return this.http
      .get('assets/wishes.json', options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        'There is an issue with the client or network:',
        error.error
      );
    } else {
      console.error('There is an issue with the server:', error.error);
    }

    return throwError(
      () => new Error('Cannot retrive wishes from server. Please try again.')
    );
  }

  addWish(wish: Wish) {
    let options: any = this.DEFAULT_OPTIONS;

    options.headers = options.headers.set('Authorization', 'value');
    this.http.post('assets/wishes.json', wish, options);
  }
}
