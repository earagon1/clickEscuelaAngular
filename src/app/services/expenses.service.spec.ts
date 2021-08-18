/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { ExpensesService } from './expenses.service';

describe('Service: Expenses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpensesService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([ExpensesService], (service: ExpensesService) => {
    expect(service).toBeTruthy();
  }));
});
