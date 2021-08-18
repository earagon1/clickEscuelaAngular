import { MESSAGES } from './../../../../enums/messages-constants';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { IconGeneratorService } from './../../../../services/icon-generator.service';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { dataStudents } from './../../../teacher/students/students';

import { studentService } from '../../../../services/student.service';
import {
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { ConfirmDialogComponent } from '../../../commons/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { ContactInfoComponent } from 'src/app/components/commons/contact-info/contact-info.component';
import { COMMONS } from 'src/app/enums/commons';

@Component({
  selector: 'app-student-base-model',
  templateUrl: './student-base-model.component.html',
  styleUrls: ['./student-base-model.component.scss'],
})
export class StudentBaseModelComponent implements OnInit {

  serviceRequest: any = null;

  displayedColumns: string[];
  dataSource: any;
  studentsArray: Student[];
  loadStudentsService: boolean;
  reload: boolean;

  loadError: boolean;
  messageError: string;

  principalLogo: any;

  messageInfo = 'Cargando lista de estudiantes...';
  messageInfoClass = 'black';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private studentsService: studentService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<StudentBaseModelComponent>,
    public snackbar: SnackBarService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadStudentsService = false;
    this.displayedColumns = [
      'name',
      'surname',
      'birthday',
      'document',
      // 'absences',
      'observations',
    ];

    this.loadError = false;

    this.reload = false;
    this.studentsArray = [];
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.studentsArray;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadStudentsList();
  }

  onClose() {
    this.dialogRef.close(false);
  }



  ngOnInit() {

    this.displayedColumns = [

      'name',
      'surname',
      'birthday',
      'document',
      // 'absences',
      'observations',
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.studentsArray;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openContactInfo(input) {
    const dialogRef = this.dialog.open(ContactInfoComponent, {
      data: input,
      width: '550px',
      height: '300px',
      panelClass: 'contact-info-back',
    });

    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteStudent(index, input) {
    this.confirmDialog(
      'Desea eliminar el alumno ' + input.name + ' ' + input.surname,
      index
    );
  }

  loadStudentsList() {

    this.reload = true;
    this.serviceRequest =
    this.studentsService.getStudents(false, this.data).subscribe(
      data => {

        setTimeout(() => {
            this.dataSource.data = data;
            if (JSON.stringify(this.dataSource.data) === JSON.stringify(this.studentsArray)) {
          this.snackbar.showSnackBar(MESSAGES.STUDENT.GET.NORMAL, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.NORMAL);
        } else {
          this.snackbar.showSnackBar(MESSAGES.STUDENT.GET.SUCCES, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.SUCCES);
          this.studentsArray = data;
        }
            this.loadStudentsService = true;
            this.reload = false; },

          500);
      },
      err => {
        this.snackbar.showSnackBar(MESSAGES.STUDENT.GET.ERROR, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.ERROR);
        this.loadError = true;
        this.messageError = err.message;
      }
    );
  }
  refreshTable() {
    this.loadStudentsList();
  }

  cancelRequest() {

    this.serviceRequest.unsubscribe();
    this.onClose();
    this.snackbar.showSnackBar(MESSAGES.STUDENT.CANCEL.USER, 'Cancel', 'NORMAL');
    }


  confirmDialog(input, index) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: input,
      width: '260px',
      height: '150px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.studentsService.deleteStudent(index);
        this.refreshTable();
      }
    });
  }

  editStudent(input) {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      data: { student: input, schoolId: this.data },
      width: '100vw',
      height: '95vh',
      maxWidth: '95vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }
}
