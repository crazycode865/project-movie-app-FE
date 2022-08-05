import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _baseUrl = 'http://localhost:8080/booking-api/booking';
  constructor(private _httpClient: HttpClient) {}

  // addBooking = (booking: Booking): Observable<string> => {
  //   let token = localStorage.getItem('token');
  //   let authHeaderValue = 'Bearer ' + token;
  //   let authHeader = new HttpHeaders().set('Authorization', authHeaderValue);
  //   this._httpClient.post<Booking>(`${this._baseurl}`, booking, {
  //     headers: authHeader,
  //   });
  //   return of('added product successfully');
  // };
  addBooking = (booking: Booking, showId: number): Observable<Booking> => {
    let _url = `${this._baseUrl}/customerId/5/showId/${showId}`;

    return this._httpClient.post<Booking>(_url, booking);
  };

  getById = (bookingId: number): Observable<Booking> => {
    let _url = `${this._baseUrl}/bookingId/${bookingId}`;
    return this._httpClient.get<Booking>(_url);
  };
}
