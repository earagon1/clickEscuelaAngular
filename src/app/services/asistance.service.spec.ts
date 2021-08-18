import { AsistanceParent } from './../models/asistance-parent';
/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { AsistanceService } from './asistance.service';
import { Asistance } from '../models/asistance';

describe('Service: Asistance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsistanceService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([AsistanceService], (service: AsistanceService) => {
    service.addAsistance(new Asistance('Daniel', 'Rodrigues', new Date(2020, 11, 8), true));
    service.changeStatus(1,true);

    const asistance = service.asistancesList;
    expect(service).toBeTruthy();
    expect(asistance[0] instanceof Asistance).toEqual(true);
  }));
});
