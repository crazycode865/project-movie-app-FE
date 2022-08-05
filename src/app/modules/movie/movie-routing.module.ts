import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';
import { ShowComponent } from './components/show/show.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'movie/:category',
    component: MovieCategoryComponent,
    children: [
      {
        path: ':type',
        component: MovieComponent,
      },
    ],
  },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  {
    path: 'show/:id',
    component: ShowComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'booking-details/:booking-id', component: BookingDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
