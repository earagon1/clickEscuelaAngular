import { ReportCard } from '../models/report-card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrimesterService {
  reportCardList: ReportCard[];
  mattersList = [
    'Matematicas',
    'Lengua',
    'Ciencias Sociales',
    'Ciencias Naturales',
    'Geografia',
    'Ingles',
    'Educacion fisica',
  ];

  constructor() {
    this.reportCardList = new Array(3);

    const reportCard = new ReportCard('Jazmin', 'Fernandez', new Date());
    const reportCard2 = new ReportCard('Jazmin', 'Fernandez', new Date());

    for (const mat of this.mattersList) {
      const grade = Math.random() * (10 - 1) + 1;
      reportCard.loadMatter(mat, grade);
    }

    for (const mat of this.mattersList) {
      const grade = Math.random() * (10 - 1) + 1;
      reportCard2.loadMatter(mat, grade);
    }

    this.reportCardList[0] = reportCard;
    this.reportCardList[1] = reportCard2;
  }

  get trimesterList() {
    return this.reportCardList;
  }

  loadMatters(matters: string[], index) {
    for (const matter of matters) {
      this.reportCardList[index].loadMatter(matter, 0);
    }
  }
}
