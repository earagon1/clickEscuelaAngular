
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { LibraryServiceService } from './library-service.service';

describe('Service: LibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryServiceService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([LibraryServiceService], (service: LibraryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
