import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from './../test-mocks/material.module';
/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { HomeworkService } from './homework.service';

describe('Service: Homework', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [HomeworkService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([HomeworkService], (service: HomeworkService) => {
    service.addHomework(undefined);
    service.deleteHomework(1);
    expect(service).toBeTruthy();
  }));
});
