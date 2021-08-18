import { MatDialogMock } from './../../../test-mocks/matDialogmock';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { ContactInfoComponent } from './contact-info.component';

describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<ContactInfoComponent>;
  const data = {
    adress: 'some',
    telephone: 'some',
    email: 'some',
    web: 'some',
    celular: 'some',
    whatsapp: 'some',
    telegram: 'some',
    linkedin: 'some'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInfoComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: data}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
