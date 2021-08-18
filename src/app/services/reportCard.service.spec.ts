/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { ReportCardService } from './reportCard.service';

describe('Service: ReportCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportCardService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([ReportCardService], (service: ReportCardService) => {
    expect(service).toBeTruthy();
  }));
});
