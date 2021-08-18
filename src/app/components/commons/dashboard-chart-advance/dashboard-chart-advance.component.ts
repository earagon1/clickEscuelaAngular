import { Component, Input, OnInit } from '@angular/core';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';
@Component({
  selector: 'app-dashboard-chart-advance',
  templateUrl: './dashboard-chart-advance.component.html',
  styleUrls: ['./dashboard-chart-advance.component.scss']
})
export class DashboardChartAdvanceComponent implements OnInit {
  @Input()
  dashBoardProperties: Dashboardproperties;

  // single: any[];
  view: any[] = [580, 200];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
    const information = this.dashBoardProperties.getInformation();
    Object.assign(this, {information});
  }

}
