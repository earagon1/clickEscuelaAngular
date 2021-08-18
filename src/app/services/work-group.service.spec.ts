/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { WorkGroupService } from './work-group.service';

describe('Service: WorkGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkGroupService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([WorkGroupService], (service: WorkGroupService) => {
    expect(service).toBeTruthy();
  }));
});
