/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { TrimesterService } from './trimester.service';

describe('Service: Trimester', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrimesterService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([TrimesterService], (service: TrimesterService) => {
    expect(service).toBeTruthy();
  }));
});
