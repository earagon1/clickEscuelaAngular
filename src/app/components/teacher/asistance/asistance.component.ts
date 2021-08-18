import { MatDatepicker } from '@angular/material/datepicker';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-asistance',
  templateUrl: './asistance.component.html',
  styleUrls: ['./asistance.component.scss']
})
export class AsistanceComponent implements OnInit {

  constructor() { }

  @ViewChild('picker') picker: MatDatepicker<Date>;

  ngOnInit() {

  }

  showPicker() {

  }

}
