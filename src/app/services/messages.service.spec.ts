/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { MessagesService } from './messages.service';

describe('Service: Messages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
});
