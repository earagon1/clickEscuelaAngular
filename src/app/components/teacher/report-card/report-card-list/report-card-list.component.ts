import { ReportCardService } from '../../../../services/reportCard.service';
import { MatDialog } from '@angular/material/dialog';
import { studentService } from '../../../../services/student.service';
import { Student } from 'src/app/models/student';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../../../commons/confirm-dialog/confirm-dialog.component';
import { AddReportCardComponent } from '../add-report-card/add-report-card.component';

@Component({
  selector: 'app-report-card-list',
  templateUrl: './report-card-list.component.html',
  styleUrls: ['./report-card-list.component.scss']
})
export class ReportCardListComponent implements OnInit {

  reportCardList: any[];

  displayedColumns: string[];
  dataSource: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(studentService: studentService, public dialog: MatDialog, private reportCardService: ReportCardService) {
    this.reportCardList = reportCardService.reportCardList

  }

  ngOnInit() {

    this.displayedColumns = ['name', 'surname', 'download', 'actions'];


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.reportCardList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  refreshTable() {
    this.dataSource.data = this.reportCardList;

  }

  addReportCard(component, index) {

    const dialogRef = this.dialog.open(AddReportCardComponent,
      {
        data: { component: component, index: index },
        width: '530px',
        height: '90%'
      }
    )

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.reportCardList[index].load=true;
        this.refreshTable()

      }
    });
  }

  dowloadReportCard(component, index) {
    const dialogRef = this.dialog.open(AddReportCardComponent,
      {

        data: { component: component, index: index },
        width: '530px',
        height: '90%'

      }


    )

    // dialogRef.afterClosed().subscribe(res =>{this.refreshAllChildrens()})

  }

  deleteReportCard(index) {
    this.reportCardService.deleteReportCard(index)
    this.refreshTable
  }

  confirmDialog(input, index) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {
        data: input,
        width: '60%',
        height: '150px'
      }
    )

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteReportCard(index)

      }
    });
  }

  openModify(index, component) {
    const dialogRef = this.dialog.open(AddReportCardComponent,
      {

        data: { component: component, index: index },
        width: '530px',
        height: '90%'

      }


    )

    // dialogRef.afterClosed().subscribe(res =>{this.refreshAllChildrens()})

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




}
