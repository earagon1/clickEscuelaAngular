import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistance-parents',
  templateUrl: './asistance.component.html',
  styleUrls: ['./asistance.component.scss']
})
export class AsistanceParentComponent implements OnInit {


  constructor() { }

  @Input() route: string;

  ngOnInit(): void {
  }

}
