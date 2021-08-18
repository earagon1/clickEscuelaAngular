import { COMMONS } from 'src/app/enums/commons';
import { TeacherI } from './../../../interfaces/teacher';
import { TeacherBaseModelComponent } from './../teacher-base-model/teacher-base-model.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

// Imports para chips

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { MODEL } from 'src/app/enums/models';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  secondParent: boolean;
  typeIDs: string[];
  currentTeacher: TeacherI;

  // variables para hacer funcionar los chips
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  gradeCtrl = new FormControl();
  filteredgrades: Observable<string[]>;
  grades: string[] = [];
  allgrades: string[] = [];

  gradeChar = ['A', 'B', 'C', 'D'];



  @ViewChild('gradeInput') gradeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger) matAutocompleteTrigger: MatAutocompleteTrigger;
  // Fin de chips



  constructor(private snackBar: SnackBarService, public matDialogRef: MatDialog, private teachersService: TeacherService) {
    this.secondParent = false;
    this.resetModelTeacher();

    this.typeIDs = MODEL.TYPE_ID;
    // this.filteredgrades = this.gradeCtrl.valueChanges.pipe(
    //   // tslint:disable-next-line: deprecation
    //   startWith(null),
    //   map((grade: string | null) => grade ? this._filter(grade) : this.allgrades.slice()));

    for (let i = 1; i <= 6; i++) {
      for (let j = 0; j <= 3; j++) {
        this.allgrades.push(i + this.gradeChar[j]);
      }

    }

  }

  resetModelTeacher() {
    // this.currentTeacher = new Teacher('', '', undefined, '', '', '', '', '', []);
    this.currentTeacher = {
        adress: {
          locality: 'San Miguel',
          number: '1234',
          street: 'San Lorenzo'
        },
        birthday: '1982-03-12',
        cellPhone: '1567947913',
        document: '37984111',
        documentType: 'DNI',
        email: 'nicolencinas@hotmail.com',
        gender: 'MALE',
        id: '132132132',
        name: 'Fabian Nicolas',
        schoolId: 12345,
        surname: 'Lencinas'
    };
  }

  // openListChips() {
  //   if (!this.matAutocompleteTrigger.panelOpen) {
  //     this.matAutocompleteTrigger.openPanel();

  //   } else {
  //     this.matAutocompleteTrigger.closePanel();
  //   }
  // }


  ngOnInit() {
  }

  addTeacher() {
    this.teachersService.addTeacher(this.currentTeacher).subscribe(
      data => {
        this.snackBar.showSnackBar('Se agregro correctamente al profesor', COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.NORMAL);

      },
      error => {
        this.snackBar.showSnackBar('Se produjo un al intentar agregrar al profesor',
        COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.ERROR);

      }
    );
  }

  get teacherService$() {
    return this.teachersService;
  }

  // addTeacher() {
  //   this.teachersService.addTeacher(this.currentTeacher);

  //   this.resetModelTeacher();
  //   this.showSnackBar('Se creo el nuevo docente');
  // }



  cancelAdd() {
    this.resetModelTeacher();
    this.snackBar.showSnackBar('Se limpiaron los formularios', COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.NORMAL);
  }

  openTeacherModelBase() {
    this.matDialogRef.open(TeacherBaseModelComponent, {
      height: '90vh',
      width: '100vw'
    });
  }

  // showSnackBar(message: string) {
  //   this.snackBar.open(message, 'Aceptar', { duration: 5500 });
  // }

  // Funciones para chips

  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our grade
  //   if ((value || '').trim()) {
  //     this.currentTeacher.courses.push(value.trim());
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }

  //   this.gradeCtrl.setValue(null);
  // }

  // remove(grade: string): void {
  //   const index = this.currentTeacher.courses.indexOf(grade);

  //   if (index >= 0) {
  //     this.currentTeacher.courses.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.currentTeacher.courses.push(event.option.viewValue);
  //   this.gradeInput.nativeElement.value = '';
  //   this.gradeCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allgrades.filter(grade => grade.toLowerCase().indexOf(filterValue) === 0);
  // }

}

