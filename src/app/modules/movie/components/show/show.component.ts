import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { Show } from '../../models/show';
import { MovieService } from '../../services/movie.service';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  showId!: number;
  show!: Show;
  movie!: Movie;
  constructor(
    private _showService: ShowService,
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(`In show Component`);
    this._activatedRoute.paramMap.subscribe((map) => {
      let sId = map.get('id');
      if (sId) this.showId = parseInt(sId);
      console.log(this.showId);
      console.log('Inside movie component');

      this._showService.getById(this.showId).subscribe({
        next: (data) => (this.show = data),
      });
      this._movieService.getById(this.showId).subscribe({
        next: (data) => (this.movie = data),
      });
    });
  }
}
