import { studentService } from './../../../../services/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { GRADE_MODEL } from './grade-model';
import { Student } from 'src/app/models/student';
import { MatDialogRef } from '@angular/material/dialog';
import { AddGradeComponent } from '../add-grade/add-grade.component';

@Component({
  selector: 'app-add-grade-massive',
  templateUrl: './add-grade-massive.component.html',
  styleUrls: ['./add-grade-massive.component.scss'],
})
export class AddGradeMassiveComponent implements OnInit {
  displayedColumns: any;
  dataSource: any;
  @ViewChild(MatTable) table: MatTable<any>;


  grade = GRADE_MODEL;

  courses = ['3B', '2A'];
  matters = [
    'Historia',
    'Geografia',
    'Matemáticas',
    'Ciencias Sociales',
    'Ingles',
    'Lengua',
    'Quimica',
  ];
  types =
  [
    {
      code: 'HOMEWORK',
      name: 'Tarea'
    }
  ];

  selectedCourse = '';

  studentsList: any[];

  constructor(private studentsService: studentService,
    public dialogRef: MatDialogRef<AddGradeComponent>
    ) {}

  ngOnInit() {
    this.displayedColumns = [
      'student',
      'number',
    ];

    this.dataSource = new MatTableDataSource();
    this.dataSource.data = [this.grade];
    this.studentsList = [];
  }

  addRow(student: Student) {
    this.dataSource.data.push(
      {
        student: student.name + ' ' + student.surname,
        number: 0,
      });
    this.table.renderRows();
  }

  deleteRow() {
    if (this.dataSource.data.length > 1) {
      this.dataSource.data.pop();
      this.table.renderRows();
    }
  }

  loadStudents()
  {
    this.dataSource.data = [];
    this.studentsList = this.studentsService.studentsList.filter(
      a => a.course === this.selectedCourse
    );

    this.studentsList.forEach(
      student => this.addRow(student)
    );
  }

  onClose() {
    this.dialogRef.close(true);
  }
}
