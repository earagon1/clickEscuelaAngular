import { AsistanceParent } from '../models/asistance-parent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistanceParentService {

  asistanceList: AsistanceParent[];

  constructor() {
    this.asistanceList = [];
    this.asistanceList.push(new AsistanceParent('Claudio', true, new Date(), ''));
    this.asistanceList.push(new AsistanceParent('Felipe', false, new Date(), ''));
    this.asistanceList.push(new AsistanceParent('Omar', false, new Date(), ''));
    this.asistanceList.push(new AsistanceParent('Marta', false, new Date(), ''));

  }

  get asistantList() {
    return this.asistanceList;
  }

}
