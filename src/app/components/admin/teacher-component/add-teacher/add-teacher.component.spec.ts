import { MatDialogMock } from 'src/app/test-mocks/matDialogmock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/test-mocks/material.module';
import { TeacherService } from './../../../../services/teacher.service';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';


import { AddTeacherComponent } from './add-teacher.component';
import { Observable, of, throwError } from 'rxjs';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { SnackBarServiceMock } from 'src/app/test-mocks/snack-bar-mock';

describe('AddTeacherComponent', () => {
  let component: AddTeacherComponent;
  let fixture: ComponentFixture<AddTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AddTeacherComponent ],
      providers: [TeacherService,
      {provide: MatDialogRef, useClass: MatDialogMock},
      {provide: SnackBarService, useClass: SnackBarServiceMock},
      {provide: MatDialog, useClass: MatDialogMock}
    ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.cancelAdd();
    expect(component).toBeTruthy();
  });

  it('addTeacher has called', () => {
    spyOn(component.teacherService$, 'addTeacher').and.returnValue(of([]));
    component.addTeacher();
    expect(component).toBeTruthy();
  });

  it('addTeacher has called error', () => {
    spyOn(component.teacherService$, 'addTeacher').and.returnValue(throwError(''));
    component.addTeacher();
    expect(component).toBeTruthy();
  });

  it('openTeacherBase Model', () => {
    const spy =  spyOn(component.matDialogRef, 'open').and.callThrough();
    component.openTeacherModelBase();
    expect(spy).toHaveBeenCalled();
  });
});
