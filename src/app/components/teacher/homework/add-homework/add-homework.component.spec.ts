import { SnackBarService } from './../../../../services/snack-bar.service';
import { MatDialogMock } from './../../../../test-mocks/matDialogmock';
import { Homework } from './../../../../models/homework';
import { MaterialModule } from './../../../../test-mocks/material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddHomeworkComponent } from './add-homework.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { SnackBarServiceMock } from 'src/app/test-mocks/snack-bar-mock';



describe('AddHomeworkComponent with data', () => {
  let component: AddHomeworkComponent;
  let fixture: ComponentFixture<AddHomeworkComponent>;
  const data = {
    homework : new Homework('', '', '', undefined, '', '')
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AddHomeworkComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: data},
        {provide: SnackBarService, useClass: SnackBarServiceMock}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addHomeWork', () => {
    spyOn(component.homeworkService$, 'addHomework').and.returnValue(of('CREATE_OK'));
    component.addHomework();
  });

  it('modifyHomework', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.modifyHomework();
    expect(spy).toHaveBeenCalled();
  });

  it('onClose', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onClose();
  });

  it('addHomework throw error', () => {
    spyOn(component.homeworkService$, 'addHomework').and.returnValue(throwError(''));
    component.addHomework();
  });
});

describe('AddHomeworkComponent no data', () => {
  let component: AddHomeworkComponent;
  let fixture: ComponentFixture<AddHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AddHomeworkComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


