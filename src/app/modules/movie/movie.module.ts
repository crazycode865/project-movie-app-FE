import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ShowComponent } from './components/show/show.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { TheatreDetailsComponent } from './components/theatre-details/theatre-details.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { SharedModule } from '../shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
    ShowComponent,
    ShowDetailsComponent,
    TheatreDetailsComponent,
    BookingDetailsComponent,
    MovieComponent,
    MovieCategoryComponent,
    BookingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    MatFormFieldModule,
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [BookingComponent],
})
export class MovieModule {}
