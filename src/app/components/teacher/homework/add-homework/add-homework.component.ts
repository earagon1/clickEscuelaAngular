import { SnackBarService } from './../../../../services/snack-bar.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { Homework } from '../../../../models/homework';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeworkService } from 'src/app/services/homework.service';
import { MESSAGES } from 'src/app/enums/messages-constants';
import { COMMONS } from 'src/app/enums/commons';
import { HomeworkI } from 'src/app/components/interfaces/homework';



@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.component.html',
  styleUrls: ['./add-homework.component.scss']
})
export class AddHomeworkComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<any>;

  currentHomework: HomeworkI;
  existData: boolean;
  localData: any;
  courses = [
    '1A', '2A', '1B', '2B'
  ];
  matters = [
    'Historia', 'Geografia', 'Matematica', 'Ciencias Sociales', 'Ingles', 'Lengua', 'Quimica'
  ];

  constructor(public dialogRef: MatDialogRef<AddHomeworkComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private homeworkService: HomeworkService,
              private snackBar: SnackBarService) {
    this.existData = false;
    if (data.homework === undefined) {
      this.currentHomework = {
        courseId: '27d2217c-d0f4-11eb-aa1f-0237763a7d5e',
        description: 'Tarea',
        dueDate: '2021-08-03',
        id: '1',
        name: 'Tarea',
        schoolId: 12345,
        studentId: 'ee019c2e-665e-400c-bf6f-946bcc51fcf7',
        subject: 'Matematica',
        type: 'HOMEWORK'
      };
      this.localData = {
        homework:
        {
        courseId: '27d2217c-d0f4-11eb-aa1f-0237763a7d5e',
        description: 'Tarea',
        dueDate: '2021-08-03',
        id: '1',
        name: 'Tarea',
        schoolId: 12345,
        studentId: 'ee019c2e-665e-400c-bf6f-946bcc51fcf7',
        subject: 'Matematica',
        type: 'HOMEWORK'
        },
        index: 0

      };
    } else {
      this.currentHomework = this.data.homework;
      this.localData = this.data;

    }
    this.existData = !!data.homework;



  }



  // addHomework() {
  //   this.homeworkService.addHomework(this.currentHomework);
  //   this.dialogRef.close();
  // }

  addHomework() {
    this.homeworkService.addHomework(this.currentHomework).subscribe(
      data => {
        this.snackBar.showSnackBar(MESSAGES.ACTIVITY.POST.SUCCES, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.SUCCES);
        this.dialogRef.close();
    },
      error => {
        this.snackBar.showSnackBar(MESSAGES.ACTIVITY.POST.ERROR[400], COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.ERROR);

      }
      );
   // this.dialogRef.close(false);

  }

  get homeworkService$() {
    return this.homeworkService;
  }

  modifyHomework() {

    this.homeworkService.modifyHomework(this.data.index, this.data.homework);
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close(false);
  }


  ngOnInit() {

  }

}
