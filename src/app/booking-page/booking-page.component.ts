import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  
  providersAvailabilities = {
    availableDates : [moment(new Date()).format("YYYY-MM-DD")],
    day : moment(moment(new Date()).format("YYYY-MM-DD")).locale('En')
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
