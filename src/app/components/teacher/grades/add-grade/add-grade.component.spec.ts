import { GradeI } from './../../../interfaces/grade';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { HttpClientModule } from '@angular/common/http';
import { studentService } from './../../../../services/student.service';
import { GradesService } from './../../../../services/grades.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddGradeComponent } from './add-grade.component';
import { DecimalPipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddGradeComponent', () => {
  let component: AddGradeComponent;
  let fixture: ComponentFixture<AddGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      declarations: [ AddGradeComponent ],
      providers: [
      {
        provide: MatDialogRef,
        useValue: {}
      },
      {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      },
      SnackBarService,
      GradesService,
      studentService,
      DecimalPipe
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with data', () => {
    const data: GradeI = {
      studentId: '',
      name: 'name',
      number: 9,
      subject:'subject',
      type: 'type',
      courseId: 'course',
      schoolId: 'id'
    };

    component.data.grade = data;
    expect(component).toBeTruthy();
  });
});
