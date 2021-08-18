import { CalendarEvent } from './../models/calendar-event';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarEventsService {
  eventsList: CalendarEvent[];

  constructor() {
    this.eventsList = [];
    this.eventsList.push(
      new CalendarEvent(
        new Date('5/5/2021 16:30'),
        'Reunion de padres',
        'Nos reuniremos para hablar temas sobre el cuidado de la pandemia',
        ['Marcos Lopez', 'Raul Perez'],
        'Marco Lopez'
      )
    );
    this.eventsList.push(
      new CalendarEvent(
        new Date('5/5/2021 15:20'),
        'Acto Escolar',
        'Nos reunimos para festejar el dia del trabajador',
        ['Marcos Lopez', 'Raul Perez'],
        'Marco Lopez'
      )
    );
    this.eventsList.push(
      new CalendarEvent(
        new Date('5/25/2021 '),
        'Acto Escolar',
        'Nos reunimos para festejar el dia de la independencia',
        ['Marcos Lopez', 'Raul Perez'],
        'Marco Lopez'
      )
    ),
      this.eventsList.push(
        new CalendarEvent(
          new Date('5/23/2021'),
          'Reunion de tesoreria',
          'Nos reunimos para comentar los aumentos de tarifa',
          ['Marcos Lopez', 'Raul Perez'],
          'Marco Lopez'
        )
      );

  }

  get eventList() {
    return this.eventsList;
  }

  addEvent(newEvent: CalendarEvent) {
    this.eventsList.push(newEvent);
  }
}
