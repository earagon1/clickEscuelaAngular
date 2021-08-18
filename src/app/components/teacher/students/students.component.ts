import { StudentI } from './../../interfaces/student';
import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Student } from 'src/app/models/student';
import { dataStudents } from './students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[];
  dataSource: any;
  studentsArray: Student[] = new Array(5);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() students: StudentI[];

  constructor() {}
  ngOnInit(): void {
    this.displayedColumns = [

      'name',
      'surname',
      'birthday',
      'absences',
      'observations',
    ];

    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.students;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.students);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
