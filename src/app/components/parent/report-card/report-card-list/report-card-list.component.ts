import { ReportCard } from 'src/app/models/report-card';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/commons/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportCardService } from 'src/app/services/reportCard.service';



@Component({
  selector: 'app-report-card-list',
  templateUrl: './report-card-list.component.html',
  styleUrls: ['./report-card-list.component.css']
})
export class ReportCardListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;
  currentDate = new Date();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  reportCardList: ReportCard[];



  constructor(private reportCardService: ReportCardService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.reportCardList = reportCardService.reportCardList;
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'surname', 'download'];



    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.reportCardList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  public downloadPDF(index): void {
    const date = new Date();
    const billname = 'bill' + date.getDate() + date.getHours() + date.getSeconds();

    const reportCard = this.reportCardList[index];

    const doc = new jsPDF();


    const src = 'D:/clickEscuela/src/assets/images/payOK.jpg';

    const imgData = btoa(src);
    // doc.addImage(imgData, 'jpg', 10, 78, 12, 15)


    const lineOffset = 10;
    const columns = ['Materia', 'Nota'];
    const data = [];

    for (const [clave, valor] of reportCard.matters) {
      data.push([clave, valor]);
    }

    doc.autoTable(columns, data,
      { margin: { top: 25 } }
    );





    doc.save(billname + '.pdf');
  }

  confirmDownload(row, index) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {
        data: '¿Desea descargar el boletin de ' + row,
        width: '60%',
        height: '150px'
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.downloadPDF(index);
        this.snackBar.open('Se descargo el boletin de ' + row, 'OK', { duration: 3000 });


      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
