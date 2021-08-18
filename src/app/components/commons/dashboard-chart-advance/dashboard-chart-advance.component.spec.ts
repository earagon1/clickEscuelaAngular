import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';

import { DashboardChartAdvanceComponent } from './dashboard-chart-advance.component';

describe('DashboardChartAdvanceComponent', () => {
  let component: DashboardChartAdvanceComponent;
  let fixture: ComponentFixture<DashboardChartAdvanceComponent>;
  const properties = new Dashboardproperties('', '', '', '', '');


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChartAdvanceComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChartAdvanceComponent);
    component = fixture.componentInstance;
    component.dashBoardProperties = properties;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
