import { School } from '../../../models/school';
import { style } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Payment } from 'src/app/models/payment';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalFrameComponent } from '../../student/modal-frame/modal-frame.component';
@Component({
  selector: 'app-payments-detail',
  templateUrl: './payments-detail.component.html',
  styleUrls: ['./payments-detail.component.scss'],
})
export class PaymentsDetailComponent implements OnInit {
  displayedColumns: string[];
  dataSource: any;
  totalDebt: number;
  years: number[];
  months: number[];
  selectedYear: number;
  selectedMonth: number;

  monthsNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  currentSchool: School;

  currentDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<PaymentsDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private sanitazer: DomSanitizer,
    private dialog: MatDialog
  ) {
    this.totalDebt = this.getTotalDebt(data.payment);
    this.years = [];
    this.months = [];
    this.selectedMonth = -1;
    this.selectedYear = new Date().getFullYear();
    this.currentSchool = new School(
      'Escuelas tecnicas Raggio',
      'Av. del Libertador 8635',
      'CABA',
      'Buenos Aires',
      'C1429',
      '(011) 4701-1791',
      'escuelasraggio@gmail.com'
    );

    for (let i = 1900; i < 2036; i++) {
      this.years.push(i);
    }
    for (let j = 1; j <= 12; j++) {
      this.months.push(j);
    }
  }


  onClose() {
    this.dialogRef.close(false);
  }

  ngOnInit() {
    this.displayedColumns = ['period', 'amount', 'status', 'actions'];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.data.payment;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getTotalDebt(data) {
    let debt = 0;
    for (const payment of data) {
      if (!payment.status) {
        debt += payment.amount;
      }
    }
    return debt;
  }

  filterByMonth() {
    if (this.selectedMonth !== -1) {
      const result = this.data.payment.filter(
        (a) => a.period.getMonth() === this.selectedMonth - 1
      );
      if (result.length > 0) {
        this.dataSource = result;
        this.showSnackBar(
          'Estos son los resultados para el mes de ' +
            this.monthsNames[this.selectedMonth - 1]
        );
      } else {
        this.selectedMonth = -1;
        this.dataSource = this.data.payment;
        this.showSnackBar(
          'No se encontraron para facturas para el periodo solicitado'
        );
      }
    } else {
      this.showSnackBar('Selecciones un mes valido');
      this.dataSource = this.data.payment;
    }
  }

  filterByYear() {
    if (this.selectedYear !== -1) {
      const result = this.data.payment.filter(
        (a) => a.period.getFullYear() === this.selectedYear
      );
      if (result.length > 0) {
        this.dataSource = result;
        this.showSnackBar(
          'Estos son los resultados para el año ' + this.selectedYear
        );
      } else {
        this.selectedMonth = -1;
        this.dataSource = this.data.payment;
        this.showSnackBar(
          'No se encontraron para facturas para el periodo solicitado'
        );
      }
    } else {
      this.showSnackBar('Selecciones un año valido');
      this.dataSource = this.data.payment;
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Aceptar', { duration: 5500 });
  }

  public downloadPdf(payment: Payment, method: number): void {
    const date = new Date();
    const billname =
      'bill' + date.getDate() + date.getHours() + date.getSeconds();

    const doc = new jsPDF('a4');
    doc.setFontSize(12);

    if (this.currentSchool !== undefined) {
      const name1 = this.currentSchool.$name;
      const adress = this.currentSchool.$adress;
      const city = this.currentSchool.$city;
      const province = this.currentSchool.$province;
      const postalCode = this.currentSchool.$postalCode;
      const tel1 = this.currentSchool.$telephone;

      doc.text(name1, 45, 15);
      doc.text(adress, 45, 21);
      doc.text(city + ',' + province + ',' + postalCode, 45, 27);
      doc.text('Telefono: ' + tel1, 45, 33);

      const img = new Image();
      img.src = 'assets/images/raggio.png';
      doc.addImage(img, 'PNG', 15, 10, 25, 25);
    } else {
      doc.text('[Nombre de la escuela]', 45, 15);
      doc.text('[Direccion]', 45, 21);
      doc.text(['[Ciudad, Provincia, Codigo Postal]'], 45, 27);
      doc.text('[Telefono]', 45, 33);

      const img = new Image();
      img.src = 'assets/images/logo-reduced.png';
      doc.addImage(img, 'PNG', 15, 10, 25, 25);
    }
    doc.setFontSize(20);
    doc.setTextColor(45, 92, 132);

    doc.text('FACTURA', 160, 15);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    doc.setFillColor(45, 92, 132);
    doc.roundedRect(20, 40, 80, 7, 2, 2, 'F');

    doc.setTextColor(255, 255, 255);
    doc.text(
      'Datos del alumno',
      this.centerText(20, 80, doc.getTextWidth('Datos del alumno')),
      45
    );

    doc.setTextColor(0, 0, 0);

    const studentName = this.normalizeString(this.data.student.name);
    const studentSurname = this.normalizeString(this.data.student.surname);

    doc.text(studentName + ', ' + studentSurname, 25, 52);

    doc.setFillColor(45, 92, 132);
    doc.roundedRect(115, 25, 80, 7, 2, 2, 'F');
    doc.roundedRect(115, 40, 80, 7, 2, 2, 'F');

    doc.setTextColor(255, 255, 255);

    doc.text('Nº de factura', 123, 30);
    doc.setFontSize(15);
    doc.text('|', 155, 30);
    doc.setFontSize(12);
    doc.text('Fecha', 168.5, 30);

    doc.text('ID. del cliente', 122.25, 45);
    doc.setFontSize(15);
    doc.text('|', 155, 45);
    doc.setFontSize(12);
    doc.text(
      'Titular',
      this.centerText(155, 40, doc.getTextWidth('Titular')),
      45
    );

    doc.setTextColor(0, 0, 0);

    const billdate =
      this.currentDate.getDate() +
      '/' +
      (this.currentDate.getMonth() + 1) +
      '/' +
      this.currentDate.getFullYear();

    doc.text('256', this.centerText(115, 40, doc.getTextWidth('256')), 37);
    doc.text(
      billdate,
      this.centerText(155, 40, doc.getTextWidth(billdate)),
      37
    );

    const titularName = this.data.student.titular;
    const titularID = this.data.student.idAccount;

    doc.text(
      titularName,
      this.centerText(155, 40, doc.getTextWidth(titularName)),
      52
    );
    doc.text(
      titularID,
      this.centerText(115, 40, doc.getTextWidth(titularID)),
      52
    );

    const columns = ['Descripcion', 'Cantidad', 'Precio Unitario', 'Importe'];
    const data = ['Pago de cuota', '1'];

    const voidCells = ['', '', '', ''];
    data.push('' + payment.amount + '$');
    data.push('' + payment.amount + '$');

    const tableData: any[] = [];

    tableData.push(data);

    for (let i = 0; i < 15; i++) {
      tableData.push(voidCells);
    }

    doc.autoTable(columns, tableData, {
      margin: { top: 60 },
      styles: {
        lineWidth: 0.1,
        lineColor: [60, 60, 60],
      },

      headStyles: { fillColor: [45, 92, 132] },
    });

    doc.setFillColor(189, 212, 231);
    doc.rect(14, 189, 82.7, 8, 'F');
    doc.rect(14, 197, 82.7, 8, 'F');

    doc.getFontList();

    doc.setFontType('italic');
    doc.setTextColor(45, 92, 132);
    doc.text(
      '¡Gracias por su confianza!',
      this.centerText(14, 82.7, doc.getTextWidth('¡Gracias por su confianza!')),
      198
    );

    doc.setFillColor(149, 192, 229);
    doc.rect(96.7, 189, 63.1, 8, 'F');
    doc.rect(96.7, 197, 63.1, 8, 'F');

    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFontType('normal');
    doc.text('SUBTOTAL', 100, 194);

    doc.setFontSize(13);
    doc.setTextColor(45, 92, 132);
    doc.text('TOTAL', 100, 202);

    doc.setFillColor(189, 212, 231);
    doc.rect(159.8, 189, 36.2, 8, 'F');
    doc.rect(159.8, 197, 36.2, 8, 'F');

    doc.setTextColor(0, 0, 0);

    doc.text(
      payment.amount + '$',
      this.endText(196, doc.getTextWidth(payment.amount + '$')),
      194
    );
    doc.text(
      payment.amount + '$',
      this.endText(196, doc.getTextWidth(payment.amount + '$')),
      202
    );

    doc.setFontSize(10);
    const name = this.currentSchool.$name;
    const email = this.currentSchool.$email;
    const tel = this.currentSchool.$telephone;

    const contact = 'Departamento de tesoreria, ' + tel + ', ' + email;

    doc.text(
      'Si tiene alguna duda sobre esta factura,póngase en contacto con:',
      this.centerText(
        0,
        210,
        doc.getTextWidth(
          'Si tiene alguna duda sobre esta factura,póngase en contacto con:'
        )
      ),
      280
    );
    doc.text(contact, this.centerText(0, 210, doc.getTextWidth(contact)), 285);

    // doc.save(billname + '.pdf');
    // doc.output('dataurl')

    // window.open(doc.output('bloburl',{filename:billname}))

    if (method === 1) {
      const stringUri = doc.output('datauristring');

      const url = this.sanitazer.bypassSecurityTrustResourceUrl(stringUri);

      const dialogRef = this.dialog.open(ModalFrameComponent, {
        data: url,
        width: '90vw',
        height: '100vh',
        panelClass: 'url-frame',
      });

      dialogRef.afterClosed().subscribe((result) => {});
    } else if (method === 2) {
      doc.autoPrint();
      window.open(doc.output('bloburl', { filename: billname }));
    } else if (method === 3) {
      this.showSnackBar('Funcion a implementar por backend');
    }
  }

  centerText(
    initialPoint: number,
    containerWidth: number,
    stringWidht: number
  ) {
    return initialPoint + (containerWidth - stringWidht) / 2;
  }

  endText(initialPoint: number, stringWidht: number) {
    return initialPoint - stringWidht - 4;
  }

  normalizeString(value: string) {
    return (
      value.charAt(0).toUpperCase() +
      value.substring(1, value.length).toLowerCase()
    );
  }
}
