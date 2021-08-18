import { MaterialModule } from 'src/app/test-mocks/material.module';
import { MatDialogMock } from './../../../../test-mocks/matDialogmock';
import { ReportCard } from './../../../../models/report-card';
import { TrimesterService } from './../../../../services/trimester.service';
import { ReportCardService } from './../../../../services/reportCard.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddReportCardComponent } from './add-report-card.component';

describe('AddReportCardComponent', () => {
  let component: AddReportCardComponent;
  let fixture: ComponentFixture<AddReportCardComponent>;
  const reportCard = new ReportCard('test', 'test', new Date());
  const data = {component: reportCard};



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AddReportCardComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: data},
        ReportCardService,
        TrimesterService
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    spyOn(component.dialogRef, 'close').and.callThrough();
    component.closeOnClick();
    expect(component.showTrimester).toEqual(false);
  });
});
