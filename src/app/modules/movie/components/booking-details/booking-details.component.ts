import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Booking } from '../../models/booking';
import { Movie } from '../../models/movie';
import { BookingService } from '../../services/booking.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  constructor(
    private _bookingService: BookingService,
    private _activatedRoute: ActivatedRoute
  ) {}

  bookingId!: number;
  bookingDetails!: Booking;
  ngOnInit(): void {
    this._activatedRoute.paramMap
      .pipe(
        switchMap((map: ParamMap) => {
          let bkId = map.get('booking-id');
          if (bkId) this.bookingId = parseInt(bkId);
          console.log(` In Booking Details : ${this.bookingId}`);

          return this._bookingService.getById(this.bookingId);
        })
      )
      .subscribe((data) => {
        this.bookingDetails = data;
      });
  }
}
