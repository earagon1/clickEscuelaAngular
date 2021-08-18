import { TeacherService } from 'src/app/services/teacher.service';
import { TeacherI } from './../../../interfaces/teacher';
import { Teacher } from 'src/app/models/teacher';
import { MatDialogMock } from 'src/app/test-mocks/matDialogmock';
import { MaterialModule } from './../../../../test-mocks/material.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { TeacherBaseModelComponent } from './teacher-base-model.component';
import { of, throwError } from 'rxjs';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { SnackBarServiceMock } from 'src/app/test-mocks/snack-bar-mock';
import { MatPaginator } from '@angular/material/paginator';


describe('TeacherBaseModelComponent', () => {
  let component: TeacherBaseModelComponent;
  let fixture: ComponentFixture<TeacherBaseModelComponent>;
  const teacher = new Teacher('', '', new Date(), '', '', '', '', '', []);
  const teacherI = {
    adress: {
      locality: 'San Miguel',
      number: '1234',
      street: 'San Lorenzo'
    },
    birthday: '1982-03-12',
    cellPhone: '1567947913',
    document: '37984111',
    documentType: 'DNI',
    email: 'nicolencinas@hotmail.com',
    gender: 'MALE',
    id: '132132132',
    name: 'Fabian Nicolas',
    schoolId: 12345,
    surname: 'Lencinas'
};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [TeacherBaseModelComponent],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogMock },
        { provide: MatDialog, useClass: MatDialogMock },
      {provide: SnackBarService, useClass: SnackBarServiceMock},
         TeacherService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBaseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClose has called', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onClose();
    expect(spy).toHaveBeenCalled();
  });


  it('confirmDialog has called false', () => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(false)} as MatDialogRef<typeof component>);
    component.deleteTeacher(1, teacher);
    expect(spy).toHaveBeenCalled();
  });

  it('OpenContactInfo has called', () => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(false)} as MatDialogRef<typeof component>);
    component.openContactInfo(teacher);
    expect(spy).toHaveBeenCalled();
  });

  it('editTeacher has called false', () => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(false)} as MatDialogRef<typeof component>);
    component.editTeacher(teacher);
    expect(spy).toHaveBeenCalled();
  });

  it('editTeacher has called true', () => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(true)} as MatDialogRef<typeof component>);
    component.editTeacher(teacher);
    expect(spy).toHaveBeenCalled();
  });

  it('getAllTeachers success', fakeAsync(() => {
    const spy = spyOn(component.teachersService, 'getTeachers').and.returnValue(of(teacherI));
    component.getAllTeachers();
    tick(1002);
    expect(spy).toHaveBeenCalled();
  }));

  it('getAllTeachers success', fakeAsync(() => {
    const spy = spyOn(component.teachersService, 'getTeachers').and.returnValue(throwError(''));
    component.getAllTeachers();
    tick(1002);
    expect(spy).toHaveBeenCalled();
  }));

  it('confirmDialog ', () => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of(true)} as MatDialogRef<typeof component>);
    component.confirmDialog(teacher, 1);
    expect(spy).toHaveBeenCalled();
  });

  it('applyFilter', () => {
    const spy = spyOn(component, 'applyFilter').and.callThrough();
    const input = fixture.debugElement.query(By.css('#input')).nativeElement;
    input.dispatchEvent(new KeyboardEvent('keyup'));
    expect(spy).toHaveBeenCalled();
  });








});
