import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  @Input() content; 
  providerAvailableDates;
  allowNextMonth = true;
  allowPrevMonth = true;
  providerDates;
  start;
  month;
  scope = {    
    weeks: []
  }
  constructor() { }

  ngOnInit(): void {
    this.providerAvailableDates = this.content.availableDates;
    this.providerDates = this.providerAvailableDates.map(function(date){
      return moment(date).locale("En");
    })
    this.month = this.content.day.locale("En").clone();
    this.start = this.content.day.locale("En").clone();
    this.start.date(1);
    this.removeTime(this.start.day(0));
    this.createMonth(this.scope, this.start, this.month, this.providerDates);
    console.log("AvailableDates: ", this.content.availableDates);
  }

  next() : void {
    if(this.allowNextMonth) {
      var next = this.month.clone();
      next = next.month(next.month()+1).date(1);
      this.removeTime(next.day(0));
      this.month.month(this.month.month()+1);
      this.createMonth(this.scope, next, this.month, this.providerDates);
      this.allowPrevMonth = true;
      this.allowNextMonth = true;
    }
  }

  previous() : void {
    if(this.allowPrevMonth) {
      var previous = this.month.clone();
      previous = previous.month(previous.month()-1).date(1);
      this.removeTime(previous.day(0));
      this.month.month(this.month.month()-1);
      this.createMonth(this.scope, previous, this.month, this.providerDates);
      this.allowPrevMonth = true;
      this.allowNextMonth = true;
    }
  }

  private removeTime(date: any) {
    return date.hour(0).minute(0).second(0).millisecond(0);
  }

  private createMonth(scope:any, start:any, month:any, providerDates:any) {
    scope.weeks = [];
    var done = false,
        date = start.clone(),
        monthIndex = date.month(),
        count = 0;
    while (!done) {
        scope.weeks.push({ days: this.createWeek(date.clone(), month, providerDates) });
        date.add(1, "w");
        done = count++ > 2 && monthIndex !== date.month();
        monthIndex = date.month();
    }
  }

  private createWeek(date, month, providerDates) {
    var days = [];
    for (var i = 0; i < 7; i++) {
        days.push({
            name: date.format("dddd").substring(0, 1),
            number: date.date(),
            isCurrentMonth: date.month() === month.month(),
            isToday: date.isSame(new Date(), "day"),
            isProviderDate: this.checkIfDateIsProviderDate(providerDates, date),
            date: date
        });
        date = date.clone();
        date.add(1, "d");
    }
    return days;
  }

  private checkIfDateIsProviderDate(providerDate, date) {
    var isProviderDate = false;
    providerDate.forEach(function(d){
        d = moment(d, "DD-MM-YYYY");
        var val = d.isSame(moment(date, "DD-MM-YYYY"));
        if(val){
            isProviderDate = val;
        }
    })
    return isProviderDate;
  }
}
