import { HomeworkI } from './../components/interfaces/homework';
import { Homework } from './../models/homework';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddHomeworkComponent } from './../components/teacher/homework/add-homework/add-homework.component';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  private homeworksList: Homework[];

  constructor(public connector: HttpClient ) {
    this.homeworksList = [];
    this.homeworksList.push(new Homework('', 'Evaluacion Lengua', 'Evaluacion del mes de noviembre', new Date(), '2A', 'Lengua'));
    this.homeworksList.push(new Homework('', 'Evaluacion Matematica', 'Evaluacion del mes de noviembre', new Date(), '2A', 'Matematica'));
    this.homeworksList.push(new Homework('', 'Evaluacion Geografia', 'Evaluacion del mes de noviembre', new Date(), '2A', 'Geografia'));
    this.homeworksList.push(new Homework('', 'Evaluacion Sociales', 'Evaluacion del mes de noviembre', new Date(), '2A', 'Sociales'));
    this.homeworksList.push(new Homework('', 'Evaluacion Historia', 'Evaluacion del mes de noviembre', new Date(), '2A', 'Historia'));
  }

  // addHomework(homework: Homework) {
  //   this.homeworkList.push(homework);
  // }

  addHomework(homework: HomeworkI): Observable<any> {
    const path = environment.ACTIVITY_URL.replace('{schoolId}', environment.schoolId);
    return this.connector.post<HomeworkI>(path, homework);
  }

  modifyHomework(index: number, homework: Homework) {
    this.homeworkList.splice(index, 1, homework);
  }
  deleteHomework(index) {
    this.homeworkList.splice(index, 1);
  }



  get homeworkList() {
    return this.homeworksList;
  }

}
