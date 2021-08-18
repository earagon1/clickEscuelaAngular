import { MatDialogMock } from './../../../../test-mocks/matDialogmock';
import { of, throwError } from 'rxjs';
import { SnackBarServiceMock } from './../../../../test-mocks/snack-bar-mock';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { Teacher } from './../../../../models/teacher';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from './../../../../test-mocks/material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { EditTeacherComponent } from './edit-teacher.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditTeacherComponent', () => {
  let component: EditTeacherComponent;
  let fixture: ComponentFixture<EditTeacherComponent>;
  const messages = ['hola', 'que', 'tal'];
  const teacher = new Teacher('test', 'test', new Date(), '33333333', 'DNI', '', '', '', ['']);
  const data = {teacher};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ EditTeacherComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: data},
        {provide: SnackBarService, useClass: SnackBarServiceMock},
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('modifyTeacher success', () => {
    const spy = spyOn(component.snackbar, 'showSnackBar').and.callThrough();
    spyOn(component.teachersService$, 'modifyTeacher').and.returnValue(of(''));
    component.modifyTeacher();
    expect(spy).toHaveBeenCalled();
  });

  it('modifyTeacher error', () => {
    const spy = spyOn(component.snackbar, 'showSnackBar').and.callThrough();
    spyOn(component.teachersService$, 'modifyTeacher').and.returnValue(throwError(''));
    component.modifyTeacher();
    expect(spy).toHaveBeenCalled();
  });

  it('onClose ', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onClose()
    expect(spy).toHaveBeenCalled();
  });

});
