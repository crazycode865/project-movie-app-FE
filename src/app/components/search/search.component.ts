import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/modules/movie/models/movie';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies!: Movie[];
  constructor(private _movieService: MovieService, private _router: Router) {}
  @Input()
  searchValue: Movie[] = [];

  ngOnInit(): void {}
  onSubmit = (movie: Movie) => {
    this._router.navigate(['/movie-details', movie.movieId]);
  };
}
