import { AccountService } from 'src/app/services/account.service';
import { Payment } from './../../../../models/payment';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;
  currentDate = new Date();
  @Input() idStudent;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  paymentList: Payment[];

  takeAsistance: boolean;


  constructor(private paymentService: AccountService) {
  }

  getBillName() {
    const date = new Date();
    return 'bill' + date.getDate() + date.getHours() + date.getSeconds();
  }

  public downloadPDF(index): void {
    const date = new Date();
    const billname = 'bill' + date.getDate() + date.getHours() + date.getSeconds();

    const payment = this.paymentList[index];

    const doc = new jsPDF();


    const src = 'D:/clickEscuela/src/assets/images/payOK.jpg';

    const imgData = btoa(src);
    // doc.addImage(imgData, 'jpg', 10, 78, 12, 15)


    doc.text('Generando factura para el periodo: ' + payment.period.getDate() + '/' +
     (payment.period.getMonth() + 1) + '/' + payment.period.getFullYear(), 10, 10);
    doc.text('Por un monto de: ' + payment.amount, 10, 20);
    doc.text('La Factura se encuentra: ' + (payment.status ? 'Paga' : 'Pendiente de pago'), 10, 30);
    doc.text('Esto es un documento de prueba', 10, 50);




    doc.save(billname + '.pdf');
  }

  ngOnInit() {
    this.paymentList = this.paymentService.accountsList.filter(a => a.$titularId === this.idStudent)[0].$payments;

    this.displayedColumns = ['amount', 'status', 'expiration', 'paybill'];


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.paymentList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  refreshTable() {
    this.dataSource.data = this.paymentService.accountsList.filter(a => a.$titularId === this.idStudent)[0].$payments;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
