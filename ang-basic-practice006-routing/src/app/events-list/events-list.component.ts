import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  // @Input() event: Event[];
  @Output() eventList: EventEmitter<Event[]> = new EventEmitter();

  constructor(private eService: EventService) {

  }

  ngOnInit(): void {
  }

}
