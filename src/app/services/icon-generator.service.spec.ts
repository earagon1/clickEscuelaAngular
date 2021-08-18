/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { IconGeneratorService } from './icon-generator.service';

describe('Service: IconGenerator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconGeneratorService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([IconGeneratorService], (service: IconGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
