import { Component, OnInit, Input } from '@angular/core';
import { single } from '../data-pie-chart';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input()
  dashBoardProperties: Dashboardproperties;

  constructor() {
    Object.assign(this, { single });
  }

  single: any[];
  view: any[] = [500, 200];

  // options
  showLegend = true;
  showLabels = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  onSelect(event) {
  }
  ngOnInit(): void {
  }

}
