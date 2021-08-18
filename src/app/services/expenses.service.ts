import { Expense } from './../models/expense';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

private expensesList: Expense[];

constructor() {
  this.expensesList = [];

  this.expensesList.push(new Expense(2500, 'Compra de insumos', new Date('04/04/2021')));
  this.expensesList.push(new Expense(9200, 'Arreglo de impresora', new Date('04/12/2021')));
  this.expensesList.push(new Expense(5000, 'Pago de servicios', new Date('04/15/2021')));

  this.expensesList.push(new Expense(2500, 'Compra de insumos', new Date('05/01/2021')));
  this.expensesList.push(new Expense(2500, 'Compra de insumos', new Date('05/03/2021')));
  this.expensesList.push(new Expense(2500, 'Compra de insumos', new Date('05/09/2021')));
  this.expensesList.push(new Expense(2500, 'Compra de insumos', new Date('05/10/2021')));





}

get expenseList() {
  return this.expensesList;
}

}
