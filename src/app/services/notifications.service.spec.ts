/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { NotificationsService } from './notifications.service';

describe('Service: Notifications', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([NotificationsService], (service: NotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
