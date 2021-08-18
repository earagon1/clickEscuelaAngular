import { Dashboardproperties } from './../../../models/dashboard-properties';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDashboardComponent } from './load-dashboard.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoadDashboardComponent', () => {
  let component: LoadDashboardComponent;
  let fixture: ComponentFixture<LoadDashboardComponent>;
  const dashboardProps = new Dashboardproperties('', '', '', '', '');
  const dashlist = []
  dashlist.push(dashboardProps);
  dashlist.push(dashboardProps);
  dashlist.push(dashboardProps);



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDashboardComponent);
    component = fixture.componentInstance;
    component.dashBoardsProperties = dashlist;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
