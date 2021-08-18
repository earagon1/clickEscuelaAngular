import { SCREEN } from './../../../enums/info-messages';
import { SnackBarService } from './../../../services/snack-bar.service';
import { TeacherCourse } from './../../interfaces/teacher-course';
import { CourseService } from './../../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';
import { trabajoPractico } from '../../commons/data';
import { examen } from '../../commons/data2';
import { tareas } from '../../commons/data3';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  dashBoardsProperties: Dashboardproperties[] = new Array(0);
  dashBoardsProperties1: Dashboardproperties[] = new Array(0);
  dashBoardsProperties2: Dashboardproperties[] = new Array(0);
  nameComponent = 'Cursos';

  teacherCourses: TeacherCourse;

  loadTeacherCourse: boolean;
  loadError = false;
  messageInfo = SCREEN.COURSES.INFO;
  messageError = SCREEN.COURSES.ERROR;


  constructor(private courseService: CourseService, private snackbar: SnackBarService) { }

  ngOnInit() {

    this.dashBoardsProperties.push(new Dashboardproperties('Trabajo Practico', '80%', 'icon-card-homework', null, trabajoPractico));
    this.dashBoardsProperties.push(new Dashboardproperties('Tareas', '13/20', 'icon-card', null, tareas));
    this.dashBoardsProperties.push(new Dashboardproperties('Asistencia de alumnos', '20/20', 'icon-card-attendance', null, null));
    this.dashBoardsProperties.push(new Dashboardproperties('Cantidad de aprobados', '15/20', 'icon-card-approved', null, examen));

    this.dashBoardsProperties1.push(new Dashboardproperties('Trabajo Practico', '80%', 'icon-card-homework', null, trabajoPractico));
    this.dashBoardsProperties1.push(new Dashboardproperties('Tareas', '13/20', 'icon-card', null, tareas));
    this.dashBoardsProperties1.push(new Dashboardproperties('Asistencia de alumnos', '20/20', 'icon-card-attendance', null, null));
    this.dashBoardsProperties1.push(new Dashboardproperties('Cantidad de aprobados', '15/20', 'icon-card-approved', null, examen));

    this.dashBoardsProperties2.push(new Dashboardproperties('Trabajo Practico', '80%', 'icon-card-homework', null, trabajoPractico));
    this.dashBoardsProperties2.push(new Dashboardproperties('Tareas', '13/20', 'icon-card', null, tareas));
    this.dashBoardsProperties2.push(new Dashboardproperties('Asistencia de alumnos', '20/20', 'icon-card-attendance', null, null));
    this.dashBoardsProperties2.push(new Dashboardproperties('Cantidad de aprobados', '15/20', 'icon-card-approved', null, examen));

    this.loadTeacherCourse = false;

    this.getAllCourses();
  }

  getAllCourses() {
    this.loadError = false;
    this.courseService.getAllCourses('12345').subscribe(
      result => {
        this.teacherCourses = result;
        if (result === undefined) {
          setTimeout(() => {
            this.loadError = true;
            this.messageError = SCREEN.COURSES.NOT_ASSIGN;
          }, 500);
        } else {
          setTimeout(() => {
            this.loadTeacherCourse = true;
          }, 500);
        }
      },
      error => {
        this.loadError = true;
      }
    );
  }

}
