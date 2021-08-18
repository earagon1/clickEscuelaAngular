import { MaterialModule } from 'src/app/test-mocks/material.module';
import { HomeworkService } from './../../../../services/homework.service';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeworkListComponent } from './homework-list.component';
import { MatDialogMock } from 'src/app/test-mocks/matDialogmock';

describe('HomeworkListComponent', () => {
  let component: HomeworkListComponent;
  let fixture: ComponentFixture<HomeworkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ HomeworkListComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        HomeworkService
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
