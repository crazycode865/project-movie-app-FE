import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/modules/movie/models/movie';
import { LoginService } from 'src/app/modules/movie/services/login.service';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  categories = ['genre', 'language', 'type', 'format'];
  loggedIn = false;
  movies!: Movie[];
  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute,
    private _loginService: LoginService,
    private _router: Router
  ) {}

  // searchForm!: NgForm;
  fromSearchBox = '';
  ngOnInit(): void {
    this.loggedIn = this._loginService.isUserLoggedIn();
  }
  getMovies = (choice: string) => {
    this._movieService.getMovieStartsWith(choice).subscribe({
      next: (data) => (this.movies = data),
    });
  };

  onSubmit = (movie: Movie) => {
    //to navigate to moviedetails component
    this._router.navigate(['/movie-details', movie.movieId]);
  };

  logOut() {
    this._loginService.logout();
    // this.loggedIn = false;
    window.location.reload();
  }
}
