import { Student } from './../../../models/student';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { Input, QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Notification } from '../../interfaces/Notification';
import { AddHomeworkComponent } from './add-homework/add-homework.component';


@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  @Input() currentNotification: Notification;
  @Input() isNotification: boolean;
  @ViewChildren(HomeworkListComponent) homeworkList: QueryList<HomeworkListComponent>;
  student: Student;


  constructor(public dialog: MatDialog) {

  }

  openDialog(input) {
    const dialogRef = this.dialog.open(AddHomeworkComponent,
      {
        data: input,
        width: '80%',
        height: '75%'
      }
    );

    dialogRef.afterClosed().subscribe(res => { this.refreshAllChildrens(); });

  }

  refreshAllChildrens() {
    for (const comp of this.homeworkList) {
      comp.refreshTable();
    }

  }


  ngOnInit() {
  }



}
