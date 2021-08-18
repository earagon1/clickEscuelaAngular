import { LoadScreenComponent } from './../../../commons/load-screen/load-screen.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { SnackBarService } from './../../../../services/snack-bar.service';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { studentService } from './../../../../services/student.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { StudentBaseModelComponent } from './student-base-model.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentBaseModelComponent', () => {
  let component: StudentBaseModelComponent;
  let fixture: ComponentFixture<StudentBaseModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientTestingModule, MatSnackBarModule],
      declarations: [StudentBaseModelComponent, LoadScreenComponent],
      providers: [
        studentService,
        SnackBarService,
        DecimalPipe,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBaseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
