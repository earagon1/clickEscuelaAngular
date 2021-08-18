import { WEEK, MONTH, CUSTOM_PERIOD } from './../type-constants';
import { MatDialogMock } from './../../../test-mocks/matDialogmock';
import { MaterialModule } from './../../../test-mocks/material.module';
import { DecimalPipe } from '@angular/common';
import { AccountService } from './../../../services/account.service';
import { studentService } from './../../../services/student.service';
import { IconGeneratorService } from 'src/app/services/icon-generator.service';
import { ExpensesService } from './../../../services/expenses.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AccountComponent } from './account.component';
import { of } from 'rxjs';
import { DAY } from '../type-constants';


describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [AccountComponent],
      providers: [ExpensesService, IconGeneratorService, studentService, AccountService, DecimalPipe,
      {provide: MatDialog, useClass: MatDialogMock}],

      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('generateDebtorsReport', () => {
    component.generateDebtorsReport(1);
  });

  it('generateDebtorsReport', () => {
    spyOn(component, 'arrayObjToCsv').and.callFake(() => {});
    component.generateDebtorsReport(2);
  });

  it('generateDebtorsReport', () => {
    component.generateDebtorsReport(3);
  });

  it('generatExpensesReport DAY', () => {
    const spy = spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.getExpensesReport(DAY, 1);
    expect(spy).toHaveBeenCalled();
  });

  it('generatExpensesReport WEEK', () => {
    const spy = spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.getExpensesReport(WEEK, 1);
    expect(spy).toHaveBeenCalled();
  });

  it('generatExpensesReport MONTH', () => {
    component.getExpensesReport(MONTH, 1);
  });

  it('generatExpensesReport CUSTOM_PERIOD', () => {
    const spy = spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.getExpensesReport(CUSTOM_PERIOD, 1);
    expect(spy).toHaveBeenCalled();
  });
});
