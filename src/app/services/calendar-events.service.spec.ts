import { CalendarEvent } from './../models/calendar-event';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalendarEventsService } from './calendar-events.service';

describe('Service: CalendarEvents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarEventsService]
    });
  });

  it('should ...', inject([CalendarEventsService], (service: CalendarEventsService) => {
    const event = service.eventList;
    expect(service).toBeTruthy();
    expect(event[0] instanceof CalendarEvent).toEqual(true);

  }));
});
