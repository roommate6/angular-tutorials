import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    return this.http.get('assets/wishes.json', options);
  }

  addWish(wish: Wish) {
    let options: any = this.DEFAULT_OPTIONS;

    options.headers = options.headers.set('Authorization', 'value');
    this.http.post('assets/wishes.json', wish, options);
  }
}
