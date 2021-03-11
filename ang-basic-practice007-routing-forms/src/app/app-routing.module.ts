import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventeditorComponent } from './eventeditor/eventeditor.component';
import { EventsListComponent } from './page/events-list/events-list.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: 'event/:id',
    component: EventeditorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
