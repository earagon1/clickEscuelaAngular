import { Account } from '../models/account';
import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

private accounts: Account[];

constructor() {
  this.accounts = [];

  const payment1 = [];
  payment1.push(new Payment(3200, new Date('12/04/2020'), true));
  payment1.push(new Payment(2900, new Date('11/11/2020'), true));
  payment1.push(new Payment(2900, new Date('10/08/2020'), true));

  const payment2 = [];
  payment2.push(new Payment(3200, new Date('12/04/2020'), true));
  payment2.push(new Payment(2900, new Date('11/11/2020'), true));
  payment2.push(new Payment(2900, new Date('10/08/2020'), true));

  const payment3 = [];
  payment3.push(new Payment(3200, new Date('12/04/2020'), true));
  payment3.push(new Payment(2900, new Date('11/11/2020'), true));
  payment3.push(new Payment(2900, new Date('10/08/2020'), false));

  const payment4 = [];
  payment4.push(new Payment(3200, new Date('12/04/2020'), false));
  payment4.push(new Payment(2900, new Date('11/11/2020'), true));
  payment4.push(new Payment(2900, new Date('10/08/2020'), false));
  payment4.push(new Payment(2900, new Date('01/04/2021'), true));

  this.accounts.push(new Account('1', '', '', payment4));
  this.accounts.push(new Account('2', '', '', payment3));
  this.accounts.push(new Account('3', '', '', payment2));
  this.accounts.push(new Account('4', '', '', payment1));
  this.accounts.push(new Account('5', '', '', payment3));
  this.accounts.push(new Account('6', '', '', payment2));


}

get accountsList() {
  return this.accounts;
}

}
