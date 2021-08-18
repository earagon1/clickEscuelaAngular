import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { GeoRefService } from './geo-ref.service';

describe('Service: Province', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [GeoRefService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([GeoRefService], (service: GeoRefService) => {
    expect(service).toBeTruthy();
  }));
});
