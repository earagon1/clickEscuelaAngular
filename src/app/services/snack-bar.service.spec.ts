import { MaterialModule } from 'src/app/test-mocks/material.module';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnackBarService } from './snack-bar.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Service: SnackBar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule],
      providers: [SnackBarService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([SnackBarService], (service: SnackBarService) => {
    expect(service).toBeTruthy();
  }));
});
