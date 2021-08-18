import { TeacherI } from './../../../interfaces/teacher';
import { MESSAGES } from './../../../../enums/messages-constants';
import { COMMONS } from './../../../../enums/commons';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from 'src/app/components/commons/confirm-dialog/confirm-dialog.component';
import { Teacher } from 'src/app/models/teacher';
import { EditTeacherComponent } from '../edit-teacher/edit-teacher.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContactInfoComponent } from 'src/app/components/commons/contact-info/contact-info.component';

@Component({
  selector: 'app-teacher-base-model',
  templateUrl: './teacher-base-model.component.html',
  styleUrls: ['./teacher-base-model.component.scss'],
})
export class TeacherBaseModelComponent implements OnInit {
  displayedColumns: string[];
  dataSource: any;
  teachersArray: Teacher[] = new Array(5);
  loadTeacherService = false;
  messageInfo = 'Cargando Lista de profesores';
  loadError = false;
  messageError = '';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public teachersService: TeacherService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<TeacherBaseModelComponent>,
    public snackbar: SnackBarService
  ) {
    this.teachersArray = this.teachersService.teachersList;
  }

  onClose() {
    this.dialogRef.close(false);
  }

  ngOnInit() {
    this.displayedColumns = [
      'name',
      'surname',
      'birthday',
      'idNumber',
      // 'courses',
      'actions',
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.teachersService.teachersList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getAllTeachers();
  }

  getAllTeachers() {
    this.loadError = false;
    this.loadTeacherService = false;

    this.teachersService.getTeachers('12345').subscribe(
      (data) => {
        console.log(data);
        this.dataSource.data = data;
        this.snackbar.showSnackBar(
          MESSAGES.TEACHER.GET.SUCCES,
          COMMONS.SNACK_BAR.ACTION.ACCEPT,
          COMMONS.SNACK_BAR.TYPE.SUCCES
        );
        setTimeout(() => {
          this.loadTeacherService = true;
        }, 1000);
      },
      (error) => {
        this.snackbar.showSnackBar(
          MESSAGES.TEACHER.GET.ERROR,
          COMMONS.SNACK_BAR.ACTION.ACCEPT,
          COMMONS.SNACK_BAR.TYPE.ERROR
        );
        setTimeout(() => {
          this.loadTeacherService = false;
          this.loadError = true;
          this.messageError = MESSAGES.TEACHER.GET.ERROR;
        }, 1000);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteTeacher(index, input) {
    this.confirmDialog(
      'Desea eliminar el alumno ' + input.name + ' ' + input.surname,
      index
    );
  }

  confirmDialog(input, index) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: input,
      width: '260px',
      height: '150px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.teachersService.deleteTeacher(index);
        this.getAllTeachers();
      }
    });
  }

  openContactInfo(input) {
    input.web = 'clickEscuela.com';
    const dialogRef = this.dialog.open(ContactInfoComponent, {
      data: input,
      width: '550px',
      height: '300px',
      panelClass: 'contact-info-back',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  editTeacher(input) {
    const dialogRef = this.dialog.open(EditTeacherComponent, {
      data: { teacher: input },
      width: '100vw',
      height: '95vh',
      maxWidth: '95vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllTeachers();
    });
  }
}
