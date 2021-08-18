import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GradeI } from './../components/interfaces/grade';
import { studentService } from './student.service';
import { Student } from './../models/student';
import { Injectable } from '@angular/core';
import { Grade } from '../models/grade';
import { environment } from 'src/environments/environment';
import { SCHOOL } from 'src/environments/school-data';



@Injectable({
  providedIn: 'root'
})
export class GradesService {


  private grades: Grade[];

  constructor(private connector: HttpClient) {

    this.grades = [];

    this.grades.push(new Grade('Alberto Sanchez', 'T00001', 'Evaluacion 1. Sumas y restas, separación de términos', 'Matemáticas', 10));

    this.grades[1] = new Grade('MArgarita Lopez', 'T00001', 'Evaluacion 1. Sumas y restas, separación de términos', 'Matemáticas', 8);
    this.grades[2] = new Grade('Juan Aldana', 'T00001', 'Evaluacion 1. Sumas y restas, separación de términos', 'Matemáticas', 9);
    this.grades[3] = new Grade('Monica Vera', 'T00001', 'Evaluacion 1. Sumas y restas, separación de términos', 'Matemáticas', 4);
    this.grades[4] = new Grade('Edith Kron', 'T00001', 'Evaluacion 1. Sumas y restas, separación de términos', 'Matemáticas', 6);
    this.grades[5] = new Grade('Aldo Mines', 'T00001', 'Evaluacion 1. Sumas y restas, separación de términos', 'Matemáticas', 7);

    this.grades.push(new Grade('Alberto Sanchez', 'T00004', 'Evaluacion Diciembre', 'Lengua', 10));
    this.grades.push(new Grade('Alberto Sanchez', 'T00004', 'Tarea complementaria', 'Ed. Fisica', 10));
    this.grades.push(new Grade('Alberto Sanchez', 'T00004', 'Tarea pagina 32', 'Biologia', 10));
    this.grades.push(new Grade('Alberto Sanchez', 'T00004', 'Evaluacion 2, Fracciones', 'Matemáticas', 10));

    this.grades.push(new Grade('Daniel Sanchez', 'T00004', 'Evaluacion 2, Fracciones', 'Matemáticas', 10));
    this.grades.push(new Grade('Daniel Sanchez', 'T00004', 'Evaluacion 2, Fracciones', 'Matemáticas', 10));
    this.grades.push(new Grade('Daniel Sanchez', 'T00004', 'Evaluacion 2, Fracciones', 'Matemáticas', 10));
    this.grades.push(new Grade('Daniel Sanchez', 'T00004', 'Evaluacion 2, Fracciones', 'Matemáticas', 10));



  }

  getGrades(idSchool: string): Observable<GradeI[]> {
    const path = environment.GRADES_URL.replace('{schoolId}', idSchool);
    return this.connector.get<GradeI[]>(path);
  }

  getGradeByStudent(schoolId: string, studentId: string): Observable<GradeI[]> {

    const path = environment.STUDENT_URL.replace('{schoolId}', schoolId).replace('{studentId}', studentId);
    return this.connector.get<GradeI[]>(path);
  }

  addGrade(grade: GradeI): Observable<GradeI> {
    const path = environment.GRADES_URL.replace('{schoolId}', SCHOOL.ID);
    return this.connector.post<GradeI>(path, grade);
  }

  addGradeMock(grade: Grade) {
    this.grades.push(grade);
  }

  deleteGrade(index) {
    this.grades.splice(index, 1);
  }

  modifyGrade(index, grade: Grade) {
    this.grades.splice(index, 1, grade);
  }



  get gradesList() {
    return this.grades;
  }

}
