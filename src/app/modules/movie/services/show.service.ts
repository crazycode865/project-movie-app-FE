import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private _baseUrl = 'http://localhost:8080/show-api/shows';

  constructor(private httpClient: HttpClient) {}
  getById = (id: number): Observable<Show> => {
    let url = `${this._baseUrl}/showId/${id}`;
    return this.httpClient.get<Show>(url);
  };
}
