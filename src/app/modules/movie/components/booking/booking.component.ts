import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, of } from 'rxjs';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  seatArray = ['FIRST-CLASS', 'SECOND-CLASS', 'AC-CLASS', 'BALCONY'];
  addForm!: FormGroup;
  showId!: number;
  bookingDetails!: Booking;
  bookingId!: number;
  constructor(
    private _bookingService: BookingService,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this._activatedRoute.paramMap
      .pipe(
        map((param: ParamMap) => param.get('id')),
        filter((value) => {
          if (value) {
            return true;
          }
          return false;
        })
      )
      .subscribe((data: string | null) => {
        if (data) {
          this.showId = parseInt(data);
          console.log(`ShowId: ${this.showId}`);
        }
      });
    this.addForm = new FormGroup({
      bookingDate: new FormControl('', [Validators.required]),
      seatType: new FormControl('', [Validators.required]),
      totalSeats: new FormControl('', [Validators.required]),
    });
  }

  addBooking = (addForm: FormGroup) => {
    let booking = addForm.value;
    this._bookingService.addBooking(booking, this.showId).subscribe({
      next: (data: Booking) => (this.bookingDetails = data),
      complete: () => console.log(this.bookingDetails),
    });
    alert('Movie is Booked Successfully');
  };
}
