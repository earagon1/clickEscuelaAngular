import { LoadScreenComponent } from './../../../commons/load-screen/load-screen.component';
import { MaterialModule } from './../../../../test-mocks/material.module';
import { studentService } from 'src/app/services/student.service';
import { GeoRefService } from 'src/app/services/geo-ref.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddStudentComponent } from './add-student.component';
import { DecimalPipe } from '@angular/common';
import { of } from 'rxjs';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AddStudentComponent, LoadScreenComponent]
      , providers: [GeoRefService, studentService, DecimalPipe],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const data = {
      provincias: [
      {
      nombre: 'Buenos Aires',
      id: '',
      centroide: {
        lat: '',
        lon: ''
      }
    }
    ]
   };
    spyOn(component.geoRefService$, 'getProvinces').and.returnValue(of(data));
    component.getAllProvinces();
    expect(component.provinces[0].nombre).toEqual('Buenos Aires');
  });
});
