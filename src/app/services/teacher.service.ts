import { TeacherI } from './../components/interfaces/teacher';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  teachersList: Teacher[];
  constructor(public connector: HttpClient ) {
    this.teachersList = [];
    this.teacherList.push(
      new Teacher(
        'Raul',
        'Perez Sanchez',
        new Date(),
        '20220215',
        'DNI',
        'San Martin de Tours 24',
        '1568787459',
        'rperezprofe@gmail.com',
        ['1A', '1B']
      )
    );
    this.teacherList.push(
      new Teacher(
        'Marta',
        'Lopez',
        new Date(),
        '15454878',
        'DNI',
        'Lorenzini 114',
        '1568787459',
        'malopez@gmail.com',
        ['1A']
      )
    );
    this.teacherList.push(
      new Teacher(
        'Miriam',
        'Soria',
        new Date(),
        '20477878',
        'DNI',
        'Balbin 244',
        '11548787547',
        'miriamsoria@gmail.com',
        ['1A']
      )
    );
  }

  get teacherList() {
    return this.teachersList;
  }

  getTeachers(idSchool): Observable<TeacherI> {
    const path = environment.TEACHERS_URL.replace('{schoolId}', idSchool);
    return this.connector.get<any>(path);
  }

  modifyTeacher(teacher: TeacherI): Observable<any> {
    const path = environment.TEACHERS_URL.replace('{schoolId}', environment.schoolId);
    return this.connector.put<any>(path, teacher);
  }

  // addTeacher(teacher: Teacher) {
  //   this.teachersList.push(teacher);
  // }

  addTeacher(teacher: TeacherI): Observable<any> {
    const path = environment.TEACHERS_URL.replace('{schoolId}', environment.schoolId);
    return this.connector.post<any>(path, teacher);
  }

  deleteTeacher(index) {
    this.teacherList.splice(index, 1);
  }

  editTeacher(index: number, teacher: Teacher) {
    this.teacherList.splice(index, 1, teacher);
  }
}
