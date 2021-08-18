import { Dashboardproperties } from './../../../models/dashboard-properties';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVerticalComponent } from './dashboard-vertical.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardVerticalComponent', () => {
  let component: DashboardVerticalComponent;
  let fixture: ComponentFixture<DashboardVerticalComponent>;
  const properties = new Dashboardproperties('', '', '', '', '');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVerticalComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVerticalComponent);
    component = fixture.componentInstance;
    component.dashBoardProperties = properties;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
