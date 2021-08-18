import { COMMONS } from './../../../../enums/commons';
import { MESSAGES } from './../../../../enums/messages-constants';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { GradeI } from './../../../interfaces/grade';
import { studentService } from '../../../../services/student.service';
import { GradesService } from '../../../../services/grades.service';
import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';
import { MatSelect } from '@angular/material/select';
import { SCHOOL } from 'src/environments/school-data';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss'],
})
export class AddGradeComponent implements OnInit {
  currentGrade: GradeI;
  studentsList: Student[];
  existData: boolean;
  localData: any;
  @ViewChild('course') course: MatSelect;

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



  constructor(
    public dialogRef: MatDialogRef<AddGradeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gradesService: GradesService,
    private studentsService: studentService,
    private snackBar: SnackBarService
  ) {
    if (data.grade === undefined) {
      this.currentGrade = {
        studentId: '03d0b885-5ffe-4e7a-aa9d-7630a6756e94',
        name: '',
        schoolId: '12345',
        courseId: '27d2217c-d0f4-11eb-aa1f-0237763a7d5e',
        subject: 'Filosofía',
        type: '',
        number: 9

      };
      this.localData = {
        grade: {
          name: '',
          subject: '',
          type: '',
          number: 0
        },
        index: 0,
      };

      this.existData = !!data.grade;
    } else {
      this.currentGrade = data.grade;
      this.localData = data;
    }

    this.existData = !!data.grade;

    this.studentsList = [];
  }

  loadStudents() {

    this.studentsList = this.studentsService.studentsList.filter(
      a => a.course === this.selectedCourse
    );
  }

  addGrade() {
    this.gradesService.addGrade(this.currentGrade).subscribe(
      data => {
        this.snackBar.showSnackBar(MESSAGES.GRADES.POST.SUCCES, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.SUCCES);
        this.dialogRef.close();
    },
      error => {
        this.snackBar.showSnackBar(MESSAGES.GRADES.POST.ERROR[400], COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.ERROR);

      }
    );
  }

  modifyGrade() {
    if (this.currentGrade.name === '') {
      // tslint:disable-next-line: no-unused-expression
      this.currentGrade.name === this.data.name;
    }
    this.gradesService.modifyGrade(this.data.index, this.data.grade);
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close(false);
  }
}
