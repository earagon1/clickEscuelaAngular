import { FUNCTION } from './../../../../enums/functions';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { MESSAGES } from './../../../../enums/messages-constants';
import { studentService } from '../../../../services/student.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MODEL } from 'src/app/enums/models';
import { Province } from 'src/app/models/province';
import { GeoRefService } from 'src/app/services/geo-ref.service';
import { COMMONS } from 'src/app/enums/commons';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {

  serviceRequest: any = null;

  constructor(
    public dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentsService: studentService,
    private snackbarService: SnackBarService,
    private geoRefService: GeoRefService
  ) {}

  secondParent: boolean;
  typeIDs = MODEL.TYPE_ID;

  provinces: Province[];
  districts: Province[];
  selectedProvince: string;
  normalizedDirections;



  ngOnInit() {
    this.secondParent = false;
  }

  addParent() {
    this.secondParent = !this.secondParent;
    this.secondParent
      ? this.snackbarService.showSnackBar(MESSAGES.PARENT.SUCCES, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.SUCCES)
      : this.snackbarService.showSnackBar(MESSAGES.PARENT.NORMAL, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.NORMAL);
  }

  onClose() {
    this.dialogRef.close();
  }

  getAllProvinces() {
    this.geoRefService.getProvinces().subscribe((data) => {
      this.provinces = data.provincias.sort(FUNCTION.SORT.BY_NAME);
    });
  }

  getNormalizedDirections(direction: string) {
    if (direction.length > 3) {
      this.geoRefService.normalizeDirection(direction).subscribe((data) => {
        this.normalizedDirections = data.direccionesNormalizadas;
      });
    }
  }

  getAllDistricts(id: string) {
    this.geoRefService.getDistricts(id).subscribe((data) => {
      if (id === '02') {
        data.municipios.push({ id: '222', nombre: 'Malvinas Argentinas' });
      }
      this.districts = data.municipios.sort(FUNCTION.SORT.BY_NAME);
    });
  }

  cancelAdd() {
    this.snackbarService.showSnackBar(MESSAGES.CLEAR_FORMS, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.NORMAL);
  }


  editStudent() {
    this.data.student.schoolId = this.data.schoolId;
    this.studentsService.editStudentPut(this.data.student, this.data.schoolId).subscribe(
      data => {
        this.snackbarService.showSnackBar(MESSAGES.STUDENT.PUT.SUCCES, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.SUCCES);
        this.dialogRef.close(false);
      },
      error => {
        this.snackbarService.showSnackBar(MESSAGES.STUDENT.PUT.ERROR, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.ERROR);
      }
    );
  }

  get snackbarService$() {
    return this.snackbarService;
  }

  get geoRefService$() {
    return this.geoRefService;
  }
}
