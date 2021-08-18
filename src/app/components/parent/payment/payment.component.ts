import { studentService } from 'src/app/services/student.service';
import { AccountService } from 'src/app/services/account.service';
import { PaymentsDetailComponent } from 'src/app/components/commons/payments-detail/payments-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { PaymentService } from './../../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  currentDate: Date;
  nextExpiration: Date;
  paymentList: Payment[];
  faultpayments: Payment[];
  currentStudent: Student;
  idStudent = '1';
  detailShow = true;

  paymentDebt = 0;

  constructor(
    private paymentService: PaymentService,
    private dialog: MatDialog,
    private accountService: AccountService,
    private studentsService: studentService
  ) {
    this.currentDate = new Date();
    this.nextExpiration = new Date();
    this.nextExpiration.setFullYear(2021);
    this.nextExpiration.setDate(12);
    this.nextExpiration.setMonth(3);
    this.paymentList = accountService.accountsList.filter(
      (a) => a.$titularId === this.idStudent
    )[0].$payments;
    this.currentStudent = studentsService.studentsList.filter(
      (a) => a.id === this.idStudent
    )[0];
    this.faultpayments = [];
  }

  getDetail() {
    const dialogRef = this.dialog.open(PaymentsDetailComponent, {
      data: { payment: this.paymentList, student: this.currentStudent },
      width: '100vw',
      height: '95vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  closeDetail() {
    this.detailShow = false;
  }
  showDetail() {
    this.detailShow = true;
  }

  getDebt() {
    const debts = this.paymentList.filter((a) => a.status === false);
    this.faultpayments = debts;

    this.paymentDebt = 0;
    for (const elem of debts) {
      this.paymentDebt += elem.amount;
    }

  }

  ngOnInit(): void {
    this.getDebt();
  }
}
