import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistanceParentComponent } from './asistance.component';

describe('AsistanceParentComponent', () => {
  let component: AsistanceParentComponent;
  let fixture: ComponentFixture<AsistanceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistanceParentComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistanceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
