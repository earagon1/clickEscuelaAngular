import { TeacherCourse } from './../components/interfaces/teacher-course';
import { CourseI } from './../components/interfaces/course';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

constructor(private connector: HttpClient) { }


getAllCourses(idSchool): Observable<TeacherCourse> {
  // const course: TeacherCourse =
  // {
  //   adress: {
  //   street: 'Velazquez',
  //   number: '2644',
  //   locality: 'Malvinas Argentinas'
  //   },
  //   birthday: '01/12/1993',
  //   cellPhone: '1566121477',
  //   document: '22555333',
  //   documentType: 'DNI',
  //   email: 'nicolencinas@hotmail.com',
  //   gender: 'MALE',
  //   id: '2154654568798798',
  //   name: 'Nicolas Fabian',
  //   schoolId: 12345,
  //   surname: 'Lencinas',
  //   courses: [
  //     {
  //       id: '2A',
  //       year: 2,
  //       division: 'A',
  //       countStudent: 2,
  //       students: []
  //     },
  //     {
  //       id: '3B',
  //       year: 3,
  //       division: 'B',
  //       countStudent: 2,
  //       students: []
  //     }
  //   ]
  // };

  const course2 = {
    id: '6219ad23-cdff-40e7-8462-73e693252f62',
    name: 'Fabian Nicolas',
    surname: 'Lencinas',
    documentType: 'DNI',
    document: '37984111',
    birthday: '1982-03-12',
    adress: {
        street: 'San Lorenzo',
        number: 1234,
        locality: 'San Miguel'
    },
    cellPhone: '1567947913',
    email: 'nicolencinas@hotmail.com',
    school_id: 12345,
    courses: [
        {
            id: 'd6a35c07-4422-4884-ba6b-9e4c72939110',
            year: 8,
            division: 'A',
            countStudent: 25,
            students: []
        },
        {
            id: '0b5e0527-bc9a-45b5-94c7-7d4839629c8e',
            year: 9,
            division: 'B',
            countStudent: 25,
            students: [
                {
                    id: '4af08bb0-2c5c-4e5a-bd55-8f0a7189ede2',
                    name: 'Soledad',
                    surname: 'Leyes',
                    document: '89325454',
                    gender: 'FEMALE',
                    grade: '12°',
                    division: 'B',
                    level: 'PRIMARIO',
                    birthday: '2002-01-02',
                    cellPhone: '2324234234',
                    email: 'sole@gmail.com'
                },
                {
                    id: 'd33437e4-001f-4008-afa5-2adb72141725',
                    name: 'Soledad1',
                    surname: 'Leyes',
                    document: '19325454',
                    gender: 'FEMALE',
                    grade: '12°',
                    division: 'B',
                    level: 'PRIMARIO',
                    birthday: '2002-01-02',
                    cellPhone: '2324234234',
                    email: 'sole@gmail.com'
                },
                {
                    id: 'fd378360-0aa6-439a-a600-d8a1e8031d15',
                    name: 'Soledad4',
                    surname: 'Leyes',
                    document: '59325454',
                    gender: 'FEMALE',
                    grade: '12°',
                    division: 'B',
                    level: 'PRIMARIO',
                    birthday: '2002-01-02',
                    cellPhone: '2324234234',
                    email: 'sole@gmail.com'
                }
            ]
        }
    ]
};

  const path = environment.COURSE_URL.replace('{schoolId}', idSchool);
  return this.connector.get<TeacherCourse>(path);

  // return of(course);
}

}
