import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from './../../../../services/account.service';
import { Student } from './../../../../models/student';
import { studentService } from './../../../../services/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentsDetailComponent } from 'src/app/components/commons/payments-detail/payments-detail.component';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {

  accounts: any[];
  studentsList: Student[];

  displayedColumns: string[];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  checked: boolean;

  constructor(
    private studentsService: studentService,
    private accountsService: AccountService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.studentsList = [];
    this.accounts = [];

    this.studentsList = this.studentsService.studentsList;


    this.checked = false;



    for (const student of this.studentsService.studentsList) {
      const account = {
        name: student.name,
        surname: student.surname,
        course: student.course,
        titular: student.parent1.name + ' ' + student.parent1.surname,
        titularId: student.id,
        idAccount: student.parent1.id,
        state: this.accountsService.accountsList.filter((a) => a.$titularId === student.id)[0].$state
      };

      this.accounts.push(account);
    }
  }


  ngOnInit() {
    this.displayedColumns = [
      'name',
      'surname',
      'course',
      'titular',
      'state',
      'actions',
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.accounts;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  showDebtors() {
    if (this.checked) {
      const accountsDebtor = this.accounts.filter((a) => a.state === false);
      if (accountsDebtor.length > 0) {
        this.dataSource.data = accountsDebtor;
        this.showSnackBar(
          'Se encontraron las siguientes cuentas a regularizar'
        );
      } else {
        this.dataSource.data = this.accounts;
        this.showSnackBar('No se encontraron cuentas a regularizar');
      }
    } else {
      this.dataSource.data = this.accounts;
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getPaymentDetail(id: string, student) {
    const payment = this.accountsService.accountsList.filter(
      (a) => a.$titularId === id
    )[0].$payments;
    const dialogRef = this.dialog.open(PaymentsDetailComponent, {
      data: { payment, student },
      width: '100vw',
      height: '95vh',
      maxWidth: '95vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      
    });
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Aceptar', { duration: 5500 });
  }
}
