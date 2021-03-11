import { Injectable } from '@angular/core';
import { Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  list: Event[] = [{
    event: "Youfeed",
    date: "8/4/2020",
    time: "7:59 PM",
    location: "67904 Corscot Junction"
  }, {
    event: "Thoughtsphere",
    date: "2/3/2021",
    time: "8:47 PM",
    location: "663 Union Junction"
  }, {
    event: "Realbridge",
    date: "4/4/2020",
    time: "2:51 PM",
    location: "09 Northport Alley"
  }, {
    event: "Realfire",
    date: "9/15/2020",
    time: "1:44 PM",
    location: "98 Eastwood Street"
  }, {
    event: "Photobug",
    date: "3/4/2020",
    time: "1:55 PM",
    location: "82 Village Trail"
  }]


  constructor() { }

  getAll(event: Event[]) {

  }
}
