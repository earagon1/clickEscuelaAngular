
import { environment } from './../../environments/environment';
import { Parent } from '../models/parent';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Student } from '../models/student';
import { Subject } from 'rxjs/internal/Subject';
import { DecimalPipe } from '@angular/common';
import { tap } from 'rxjs/internal/operators/tap';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { delay } from 'rxjs/internal/operators/delay';
import { SortColumn, SortDirection } from '../components/directives/sortable.directive';
import { Observable } from 'rxjs/internal/Observable';
import { PipeTransform, Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';
import { StudentI } from '../components/interfaces/student';
import { id } from '@swimlane/ngx-charts';
interface SearchResult {
  students: Student[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number | Parent| Date, v2: string | number | Parent| Date) => v1 < v2 ? -1 : (v1 > v2 ? 1 : 0);

function sort(students: Student[], column: SortColumn, direction: string): Student[] {
  if (direction === '' || column === '') {
    return students;
  } else {
    return [...students].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}


function matches(student: Student, term: string, pipe: PipeTransform) {
  return student.name.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(student.absences).includes(term)
    || student.surname.includes(term);
}

@Injectable({ providedIn: 'root' })
export class studentService {

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _students$ = new BehaviorSubject<Student[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  studentsArray: Student[];
  editCurrentStudent: Student;


  constructor(
    private pipe: DecimalPipe,
    private connector: HttpClient) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
    });

    this._search$.next();
    this.studentsArray = [];
    this.studentsArray[0] = new Student(
      '1',
      'OSCAR',
      'UMBERT',
      new Date(),
      12,
      '',
      '3B',
      44444444,
      'Calle Falsa 123',
      '1566666666',
      'something@gmail.com'
    );
    this.studentsArray[1] = new Student(
      '2',
      'CLAUDIO',
      'GOMEZ',
      new Date(),
      5,
      '',
      '3B',
      44444444,
      'Calle Falsa 123',
      '1566666666',
      'something@gmail.com'
    );
    this.studentsArray[2] = new Student(
      '3',
      'FELIPE',
      'ROMERO',
      new Date(),
      0,
      '',
      '3B',
      44444444,
      'Calle Falsa 123',
      '1566666666',
      'something@gmail.com'
    );
    this.studentsArray[3] = new Student(
      '4',
      'OMAR',
      'GOMEZ',
      new Date(),
      18,
      '',
      '2A',
      44444444,
      'Calle Falsa 123',
      '1566666666',
      'something@gmail.com'
    );
    this.studentsArray[4] = new Student(
      '5',
      'MARTA',
      'GIMENEZ',
      new Date(),
      15,
      '',
      '2A',
      44444444,
      'Calle Falsa 123',
      '1566666666',
      'something@gmail.com'
    );
    this.studentsArray[5] = new Student(
      '6',
      'MARIANA',
      'FERREIRA',
      new Date(),
      11,
      '',
      '2A',
      44444444,
      'Calle Falsa 123',
      '1566666666',
      'something@gmail.com'
    );

    const parent = new Parent('12', 'Daniel', 'Perez', new Date(), 37844777, 'Calle falsa 123', '1544444444', 'alguien@hotmail.com');
    const parent2 = new Parent('25', 'Humberto', 'Gomez', new Date(), 37844777, 'Calle falsa 123', '1544444444', 'alguien@hotmail.com');
    const parent3 = new Parent('68', 'Osvaldo', 'Ferreira', new Date(), 37844777, 'Calle falsa 123', '1544444444', 'alguien@hotmail.com');

    this.studentsArray[0].parent1 = parent;
    this.studentsArray[1].parent1 = parent2;
    this.studentsArray[2].parent1 = parent3;
    this.studentsArray[3].parent1 = parent2;
    this.studentsArray[4].parent1 = parent2;
    this.studentsArray[5].parent1 = parent3;
  }

  get students$() { return this._students$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;


    // 1. sort



    let students = sort(this.studentsArray, sortColumn, sortDirection);

    // 2. filter
    students = students.filter(student => matches(student, searchTerm, this.pipe));
    const total = students.length;

    // 3. paginate
    students = students.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ students, total });
  }

  addStudent(student: Student) {
    this.studentsArray.push(student);
  }

  get editStudent() {
    return this.editCurrentStudent;
  }

  get studentsList() {
    return this.studentsArray;
  }

  deleteStudent(index: number) {
    this.studentsArray.splice(index, 1);
  }

  edit(index, data: Student) {
    this.studentsArray.splice(index, 1, data);
  }

  // Aca incia el codigo para consumo de api

  getStudents(fulldetail: boolean, idSchool: string): Observable<any> {
    const path = environment.GET_STUDENT_URL.replace('{schoolId}', idSchool).replace('{fullDetail}', fulldetail + '');
    return this.connector.get<any>(path);
  }

  addStudentPost(student: StudentI, idSchool: string): Observable<StudentI> {
    const path = environment.POST_STUDENT_URL.replace('{schoolId}', idSchool);
    return this.connector.post<StudentI>(path, student);
  }

  editStudentPut(student: StudentI, idSchool: string): Observable<StudentI> {
    const path = environment.POST_STUDENT_URL.replace('{schoolId}', idSchool);
    return this.connector.put<StudentI>(path, student);
  }





}
