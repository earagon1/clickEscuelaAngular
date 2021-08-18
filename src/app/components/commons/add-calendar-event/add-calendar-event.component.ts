import { CalendarEventsService } from './../../../services/calendar-events.service';
import { CalendarEvent } from './../../../models/calendar-event';
import { CalendarComponent } from './../calendar/calendar.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';

@Component({
  selector: 'app-add-calendar-event',
  templateUrl: './add-calendar-event.component.html',
  styleUrls: ['./add-calendar-event.component.scss'],
})
export class AddCalendarEventComponent implements OnInit {
  newEvent: CalendarEvent;
  currentDate: Date;
  week: any = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];
  monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  dayName: string;
  currentMoment: any;

  constructor(
    public dialogRef: MatDialogRef<AddCalendarEventComponent>,
    @Inject(MAT_DIALOG_DATA) public day: any,
    private calendarService: CalendarEventsService,

  ) {
    this.newEvent = new CalendarEvent(
      undefined,
      '',
      '',
      ['Marcos Lopez, Samuel Sanchez'],
      'Marcos Lopez'
    );
    this.newEvent.$day = day.dayObject.toDate();
    this.setDayName();
  }

  ngOnInit() {}

  onClose() {
    this.dialogRef.close(false);
  }

  setDayName() {
    this.currentMoment = moment(this.newEvent.$day);

    this.dayName =
      this.week[this.currentMoment.isoWeekday() - 1] +
      ', ' +
      this.currentMoment.format('DD') +
      ' de ' +
      this.monthNames[this.currentMoment.month()];

  }

  saveEvent() {
    this.calendarService.addEvent(this.newEvent);
    this.dialogRef.close(true);
  }

  getCalendarService() {
    return this.calendarService;
  }
}
