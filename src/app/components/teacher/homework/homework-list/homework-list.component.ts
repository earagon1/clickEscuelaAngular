
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../../../commons/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HomeworkService } from 'src/app/services/homework.service';
import { AddHomeworkComponent } from '../add-homework/add-homework.component';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.scss']
})
export class HomeworkListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  homeworkList = [];

  constructor(private homeworkService: HomeworkService, public dialog: MatDialog) {
    this.homeworkList = homeworkService.homeworkList;
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'description', 'deliveryDate', 'matter', 'actions'];


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.homeworkList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  refreshTable() {
    this.dataSource.data = this.homeworkList;
  }

  confirmDelete(index) {
    this.confirmDialog('¿Desea eliminar la nota?', index);
  }

  confirmDialog(input, index) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {
        data: input,
        width: '260px',
        height: '150px'
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteHomework(index);

      }
    });
  }

  openModify(index, homework) {
    const dialogRef = this.dialog.open(AddHomeworkComponent,
      {

        data: { homework, index },
        width: '80%',
        height: '75%'

      }


    );

    // dialogRef.afterClosed().subscribe(res =>{this.refreshAllChildrens()})

  }

  deleteHomework(index) {

    this.homeworkService.deleteHomework(index);
    this.refreshTable();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
