import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReportCardComponent } from './add-report-card/add-report-card.component';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(input) {
    const dialogRef = this.dialog.open(AddReportCardComponent,
      {
        data: input,
        width: '80%',
        height: '75%'
      }
    );

    // dialogRef.afterClosed().subscribe(res =>{this.refreshAllChildrens()})

  }

}
