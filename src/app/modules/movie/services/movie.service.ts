import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _baseUrl = 'http://localhost:8080/movie-api/movies';

  constructor(private httpClient: HttpClient) {}

  getAllMovies = (): Observable<Movie[]> => {
    return this.httpClient.get<Movie[]>(this._baseUrl);
  };
  getById = (id: number): Observable<Movie> => {
    let url = `${this._baseUrl}/movieId/${id}`;
    return this.httpClient.get<Movie>(url);
  };

  // Get All Distincts
  getByCategory = (category: string): Observable<string[]> => {
    let url = `${this._baseUrl}/category/${category}`;
    return this.httpClient.get<string[]>(url);
  };

  getByChoice = (type: string): Observable<Movie[]> => {
    let url = `${this._baseUrl}/choice/${type}`;
    return this.httpClient.get<Movie[]>(url);
  };
  getMovieStartsWith=(choice:string):Observable<Movie[]>=>{
    let url = `${this._baseUrl}/startsWith/${choice}`;
    return this.httpClient.get<Movie[]>(url);
  }
}
