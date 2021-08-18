import { GradesListComponent } from './../../parent/grades/grades-list/grades-list.component';
import { DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/test-mocks/material.module';
import { MatDialogMock } from './../../../test-mocks/matDialogmock';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesComponent } from './grades.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GradesComponent', () => {
  let component: GradesComponent;
  let fixture: ComponentFixture<GradesComponent>;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ GradesComponent, GradesListComponent],
      providers: [{provide: MatDialogRef, useClass: MatDialogMock},DecimalPipe],
      schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialog = component.dialog;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Add-Grade open dialog', () => {
  //   spyOn(component.dialog, 'open').and.callThrough();
  //   component.openDialog('Agregar nueva nota');
  //   expect(component.dialog.open).toHaveBeenCalled();
  //   });


  it ('Refresh childrens', () => {
    const refresh = component.refreshAllChildrens();
    expect(refresh).toEqual(true);
  });
});
