import { MatDialogMock } from './../../../test-mocks/matDialogmock';
import { MaterialModule } from './../../../test-mocks/material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddCalendarEventComponent } from './add-calendar-event.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';

describe('AddCalendarEventComponent', () => {
  let component: AddCalendarEventComponent;
  let fixture: ComponentFixture<AddCalendarEventComponent>;
  const day = {dayObject: moment(new Date())};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AddCalendarEventComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: day},
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalendarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onClose method', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onClose();
    expect(spy).toHaveBeenCalled();
  });

  it('should onClose method', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    spyOn(component.getCalendarService(), 'addEvent').and.callThrough();
    component.saveEvent();
    expect(spy).toHaveBeenCalled();
  });
});
