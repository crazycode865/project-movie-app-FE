import { Address } from './address';
import { Booking } from './booking';

export interface Customer {
  customerId: number;
  customerName: string;
  emailId: string;
  address: Address;
  booking: Booking;
}

// this.customerName = customerName;
//         this.emailId = emailId;
//         this.address = address;
//         this.booking = booking;
