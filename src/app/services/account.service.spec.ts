/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { AccountService } from './account.service';

describe('Service: Account', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
