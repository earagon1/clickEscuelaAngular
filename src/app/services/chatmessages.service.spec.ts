/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { ChatmessagesService } from './chat-messages.service';

describe('Service: Chatmessages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatmessagesService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([ChatmessagesService], (service: ChatmessagesService) => {
    expect(service).toBeTruthy();
  }));
});
