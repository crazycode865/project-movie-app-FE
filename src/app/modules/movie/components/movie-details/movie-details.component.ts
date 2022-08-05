import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;
  movie!: Movie;
  //use ActivatedRoute ti
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService
  ) {}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let getId = map.get('id');
      if (getId) this.movieId = parseInt(getId);
    });
    this._movieService.getById(this.movieId).subscribe({
      next: (data: Movie) => {
        this.movie = data;
      },
      complete: () => console.log(`completed loading movie by Id`),
    });
  }
}
