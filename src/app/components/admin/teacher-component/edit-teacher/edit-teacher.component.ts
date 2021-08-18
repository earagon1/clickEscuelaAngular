import { TeacherI } from './../../../interfaces/teacher';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { COMMONS } from 'src/app/enums/commons';
import { MESSAGES } from 'src/app/enums/messages-constants';
import { TeacherService } from 'src/app/services/teacher.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent implements OnInit {

    // variables para hacer funcionar los chips
    visible = true;
    selectable = true;
    removable = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    gradeCtrl = new FormControl();
    filteredgrades: Observable<string[]>;
    allgrades: string[] = [];

    gradeChar = ['A', 'B', 'C', 'D'];
    typeIDs: string[];



    @ViewChild('gradeInput') gradeInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;
    // Fin de chips

  constructor(
    public dialogRef: MatDialogRef<EditTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private teachersService: TeacherService,
    public snackbar: SnackBarService) { for (let i = 1; i <= 6; i++) {
      for (let j = 0; j <= 3; j++) {
        this.allgrades.push(i + this.gradeChar[j]);
      }

      this.typeIDs = ['DNI', 'CI', 'LE', 'LC'];
  }
}

  ngOnInit() {


  }

  modifyTeacher() {

    this.data.teacher.schoolId = environment.schoolId;
    this.data.teacher.gender = 'MALE';
    console.log(this.data.teacher);

    this.teachersService.modifyTeacher(this.data.teacher).subscribe(
      data => {

        this.snackbar.showSnackBar(
        MESSAGES.TEACHER.PUT.SUCCES,
        COMMONS.SNACK_BAR.ACTION.ACCEPT,
        COMMONS.SNACK_BAR.TYPE.SUCCES);
      },
      error => {
        this.snackbar.showSnackBar(
        MESSAGES.TEACHER.PUT.ERROR,
        COMMONS.SNACK_BAR.ACTION.ACCEPT,
        COMMONS.SNACK_BAR.TYPE.ERROR);

      }
    );
  }

  onClose() {
    this.dialogRef.close(true);
  }


  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our grade
  //   if ((value || '').trim()) {
  //     this.data.teacher.courses.push(value.trim());
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }

  //   this.gradeCtrl.setValue(null);
  // }

  // remove(grade: string): void {
  //   const index = this.data.teacher.courses.indexOf(grade);

  //   if (index >= 0) {
  //     this.data.teacher.courses.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.data.teacher.courses.push(event.option.viewValue);
  //   this.gradeInput.nativeElement.value = '';
  //   this.gradeCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allgrades.filter(grade => grade.toLowerCase().indexOf(filterValue) === 0);
  // }

  get teachersService$(){
    return this.teachersService;
  }

}
