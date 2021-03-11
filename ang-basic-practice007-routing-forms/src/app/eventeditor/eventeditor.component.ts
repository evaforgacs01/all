import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService } from '../service/event.service';
import { Event } from 'src/app/model/event'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eventeditor',
  templateUrl: './eventeditor.component.html',
  styleUrls: ['./eventeditor.component.scss']
})
export class EventeditorComponent implements OnInit {

  //1.kiolvasni az url-bol az id  parametert
  //2.ezzel a parameterrel meghivni az EventService.get metodust
  event$: Observable<Event> = this.activatedRoute.params.pipe(
    switchMap(params => this.eventService.get(params.id))
  );


  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onUpdate(form: NgForm, event: Event): void {
    this.eventService.update(event).subscribe(
      ev => this.router.navigate([''])
    );
  }

}
