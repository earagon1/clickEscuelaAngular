import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogMock } from 'src/app/test-mocks/matDialogmock';
import { DecimalPipe } from '@angular/common';
import { MaterialModule } from './../../../../test-mocks/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EditStudentComponent } from './edit-student.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MESSAGES } from 'src/app/enums/messages-constants';
import { COMMONS } from 'src/app/enums/commons';
import { of } from 'rxjs';

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;
  const student = {

        id: '03d0b885-5ffe-4e7a-aa9d-7630a6756e94',
        name: 'Nicolas',
        surname: 'Lencinas',
        document: '37984171',
        gender: 'MALE',
        grade: '3',
        division: 'D',
        level: 'PREESCOLAR',
        birthday: '2010-02-02',
        adress: {
            street: 'etert',
            number: 333,
            locality: 'tertre'
        },
        cellPhone: '2324234234',
        email: 'perueb@gmail.com',
        parent: {
            name: 'terter',
            surname: 'sfsdf',
            document: '63543543',
            gender: 'MALE',
            birthday: '1982-10-25',
            adress: {
                street: 'Calle falsa',
                number: 343,
                locality: 'SAN MIGUEL'
            },
            cellPhone: '22423423423',
            email: 'perueb2@gmail.com'
        }

  };
  const data = {student};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,
      BrowserAnimationsModule],
      declarations: [ EditStudentComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: data},
        DecimalPipe
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClose method', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onClose();
    expect(spy).toHaveBeenCalled();
  });

  it('addParet method false', () => {
    component.secondParent = false;
    const spy = spyOn(component.snackbarService$, 'showSnackBar').and.callThrough();
    component.addParent();
    expect(spy).toHaveBeenCalledWith(MESSAGES.PARENT.SUCCES, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.SUCCES);
  });

  it('addParet method true', () => {
    component.secondParent = true;
    const spy = spyOn(component.snackbarService$, 'showSnackBar').and.callThrough();
    component.addParent();
    expect(spy).toHaveBeenCalledWith(MESSAGES.PARENT.NORMAL, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.NORMAL);
  });

  it('getAllProvinces', () => {
    component.provinces = [];
    const data = {
      provincias:
    [
      {nombre: 'B',
      id: '2',
      centroide: {lat: '1', lon: '2'}
      },
      {nombre: 'A',
      id: '2',
      centroide: {lat: '1', lon: '2'}
    }
    ]
    };

    const spy = spyOn(component.geoRefService$, 'getProvinces').and.returnValue(of(data));
    component.getAllProvinces();

    expect(component.provinces[0].nombre).toEqual('A');

  });
});
