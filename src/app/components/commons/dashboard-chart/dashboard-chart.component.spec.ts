import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';

import { DashboardChartComponent } from './dashboard-chart.component';

describe('DashboardChartComponent', () => {
  let component: DashboardChartComponent;
  let fixture: ComponentFixture<DashboardChartComponent>;
  const properties = new Dashboardproperties('', '', '', '', '');


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChartComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChartComponent);
    component = fixture.componentInstance;
    component.dashBoardProperties = properties;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
