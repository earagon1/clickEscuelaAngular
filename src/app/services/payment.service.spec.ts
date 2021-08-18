
/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { PaymentService } from './payment.service';

describe('Service: Payment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([PaymentService], (service: PaymentService) => {
    expect(service).toBeTruthy();
  }));
});
