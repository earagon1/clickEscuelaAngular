import { MaterialModule } from './../../../test-mocks/material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, DomSanitizer } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { ModalFrameComponent } from './modal-frame.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ModalFrameComponent', () => {
  let component: ModalFrameComponent;
  let fixture: ComponentFixture<ModalFrameComponent>;
  let data =''

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule],
      declarations: [ ModalFrameComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: data},
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustResourceUrl: () => ''
          }
        },
       
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
