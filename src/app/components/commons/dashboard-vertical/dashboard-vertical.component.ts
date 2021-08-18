import { Component, OnInit, Input } from '@angular/core';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';
import { single } from '../data-dahsboard-vertical';

@Component({
  selector: 'app-dashboard-vertical',
  templateUrl: './dashboard-vertical.component.html',
  styleUrls: ['./dashboard-vertical.component.scss']
})
export class DashboardVerticalComponent implements OnInit {
  @Input()
  dashBoardProperties: Dashboardproperties;
  constructor() {
    Object.assign(this, { single });

   }
  single: any[];
  multi: any[];

  view: any[] = [400, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Grados';
  showYAxisLabel = true;
  yAxisLabel = 'Tareas';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(event) {
  }
  ngOnInit(): void {
  }

}
