import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-type',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css'],
})
export class MovieCategoryComponent implements OnInit {
  typesArray!: string[];
  category!: string;
  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //   this._activatedRoute.paramMap.subscribe((map) => {
    //     let cat = map.get('category');
    //     if (cat) this.category = cat;
    //     console.log(this.category);

    //     this._movieService.getByCategory(this.category).subscribe({
    //       next: (data) => (this.typesArray = data),
    //     });
    //   });

    this._activatedRoute.paramMap
      .pipe(
        switchMap((map: ParamMap) => {
          let cat = map.get('category');
          if (cat) this.category = cat;
          return this._movieService.getByCategory(this.category);
        })
      )
      .subscribe((data: string[]) => (this.typesArray = data));
  }
}
