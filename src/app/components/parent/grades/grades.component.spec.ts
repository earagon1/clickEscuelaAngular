import { GradesListComponent } from './grades-list/grades-list.component';
import { MatDialogMock } from './../../../test-mocks/matDialogmock';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from './../../../test-mocks/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesResumeComponent } from './grades.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GradesResumeComponent', () => {
  let component: GradesResumeComponent;
  let fixture: ComponentFixture<GradesResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ GradesResumeComponent, GradesListComponent],
      providers: [
        {provide: MatDialogRef, useValue: MatDialogMock}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
