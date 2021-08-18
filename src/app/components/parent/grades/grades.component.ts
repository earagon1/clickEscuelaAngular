import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesResumeComponent implements OnInit {

  sonParent: string[];

  constructor() {
    this.sonParent = [];
    this.sonParent.push('Alberto Sanchez');
    this.sonParent.push('Daniel Sanchez');

  }

  showSon(son: string) {
  }

  ngOnInit(): void {

  }



}
