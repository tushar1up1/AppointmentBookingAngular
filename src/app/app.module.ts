import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookingPageComponent } from './booking-page/booking-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    BookingPageComponent,
    CalendarComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BookingPageComponent]
})
export class AppModule { }
