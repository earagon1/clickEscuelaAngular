import { Injectable } from '@angular/core';
import { ReportCard } from '../models/report-card';

@Injectable({
  providedIn: 'root'
})
export class ReportCardService {

  reportCardList: ReportCard[];
  mattersList: string[];

  constructor() {

    this.mattersList =
      [
        'Matematicas', 'Lengua', 'Ciencias Sociales', 'Ciencias Naturales', 'Geografia', 'Ingles', 'Educacion fisica'

      ];
    this.reportCardList = [];
    this.reportCardList.push(new ReportCard('Jazmin', 'Fernandez', new Date()));
    this.reportCardList.push(new ReportCard('Eduardo', 'Gomez', new Date()));
    this.reportCardList.push(new ReportCard('Mijail', 'Andrada', new Date()));

    this.loadMatters(this.mattersList, 0);
    this.loadMatters(this.mattersList, 1);
    this.loadMatters(this.mattersList, 2);

    this.reportCardList[1].loadMatter('Lengua', 5);
    this.reportCardList[1].loadMatter('Matematicas', 10);



  }

  loadMatters(matters: string[], index) {
    for (const matter of matters) {
      this.reportCardList[index].loadMatter(matter, 0);
    }

  }

  addReportCard(grades: number[], index) {

    for (let i = 0; i < this.mattersList.length; i++) {


      this.reportCardList[index].loadMatter(this.mattersList[i], grades[i]);

    }

  }

  reportCardIndex(index) {
    return this.reportCardList[index];
  }

  deleteReportCard(index) {
    this.reportCardList[index].matters = new Map();

  }




}
