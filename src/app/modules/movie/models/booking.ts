import { Customer } from './customer';
import { Movie } from './movie';
import { Show } from './show';

export interface Booking {
  bookingId: number;
  bookingDate: Date;
  seatType: string;
  totalSeats: number;
  totalCost: number;
  bookingStatus: string;
  show: Show;
  movie: Movie;
  customer: Customer;
}
// this.bookingDate = bookingDate;
//         this.customer = customer;
//         this.movie = movie;
//         this.seatType = seatType;
//         this.totalSeats = totalSeats;
//         this.totalCost = totalCost;
//         this.show = show;
//         this.bookingStatus = bookingStatus;
