import { AsistanceParent } from '../../../../models/asistance-parent';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Asistance } from 'src/app/models/asistance';
import { MatTableDataSource } from '@angular/material/table';
import { AsistanceParentService } from 'src/app/services/asistance-parent.service';

@Component({
  selector: 'app-asistance-list',
  templateUrl: './asistance-list.component.html',
  styleUrls: ['./asistance-list.component.scss']
})
export class AsistanceListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;
  currentDate = new Date();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  asistanceList: AsistanceParent[];
  presentsList: boolean[];

  takeAsistance: boolean;

  currentFile: string;

  loadIndex: number[];
  completeIndex: number[];
  loadAnimation: number[];

  indexedMap = new Map();
  progressPercentajeList: number[];
  progressPercentaje: number;
  isFinalyload: boolean[];






  constructor(private asistanceService: AsistanceParentService) {
    this.asistanceList = [];
    this.asistanceList = asistanceService.asistanceList;
    this.currentFile = '';
    this.loadIndex = [];
    this.loadAnimation = [];
    this.progressPercentaje = 0;
    this.progressPercentajeList = [];
    this.isFinalyload = [];
    for (const asis of this.asistanceList) {
      this.progressPercentajeList.push(0);
      this.isFinalyload.push(true);
    }



  }


  progressLoad(index) {
    this.progressPercentaje = 0;


    const inter = setInterval(() => {
      this.progressPercentajeList[index] += Math.floor(Math.random() * (30 - 0)) + 0;
      this.isFinalyload[index] = this.progressPercentajeList[index] < 100;

      if (this.progressPercentajeList[index] > 100) {
        clearInterval(inter);

      }
    }, 2000);


  }

  getPercentaje(index) {
    return this.progressPercentajeList[index];
  }

  getFinaly(index) {

    return this.isFinalyload[index];
  }


  viewFileName(index) {

    return this.indexedMap.get(index).files[0].name;
  }

  loadFile(index) {
    this.loadIndex.splice(index, 1);
    this.loadAnimation.push(index);

  }



  ngOnInit() {
    this.displayedColumns = ['name', 'status', 'date', 'certificate'];


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.asistanceList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }



  viewFileList(index, ele) {
    this.loadIndex.push(index);

    this.indexedMap.set(index, ele);


  }

  refreshTable() {
    this.dataSource.data = this.asistanceService.asistanceList;
  }


  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }





}
