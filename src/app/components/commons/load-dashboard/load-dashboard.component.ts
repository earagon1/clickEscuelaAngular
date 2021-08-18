import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';

@Component({
  selector: 'app-load-dashboard',
  templateUrl: './load-dashboard.component.html',
  styleUrls: ['./load-dashboard.component.scss']
})
export class LoadDashboardComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<boolean>();
  firstDashboard = 'col-5';
  secondDashboard = 'col-3';
  thirdDashboard = 'col-4';
  constructor() { }
  @Input()
  dashBoardsProperties: Dashboardproperties[];

  ngOnInit() {
  }

  changeSizeDashboard(notificationExpand: boolean) {
    if (notificationExpand) {
      this.firstDashboard = 'col-7';
      this.secondDashboard = 'col-4';
      this.thirdDashboard = 'col-6';

    } else {
      this.firstDashboard = 'col-5';
      this.secondDashboard = 'col-3';
      this.thirdDashboard = 'col-4';
    }
  }

}
