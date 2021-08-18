import { LoadScreenComponent } from './../../../commons/load-screen/load-screen.component';
import { MaterialModule } from 'src/app/test-mocks/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { GradesListComponent } from './grades-list.component';

describe('GradesListComponent', () => {
  let component: GradesListComponent;
  let fixture: ComponentFixture<GradesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule],
      declarations: [ GradesListComponent, LoadScreenComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
