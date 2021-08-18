import { Account } from './../../../../models/account';
import { AccountService } from './../../../../services/account.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { PaymentListComponent } from './payment-list.component';
import { Payment } from 'src/app/models/payment';

class PaymentMockService extends AccountService {
  get accountsList() {return [new Account('1', '', '', [])]; }
}

describe('PaymentListComponent', () => {
  let component: PaymentListComponent;
  let fixture: ComponentFixture<PaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentListComponent ],
      providers: [
        {provide: AccountService, useClass: PaymentMockService}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //  // spyOn(component.getPaymentService,'accountsList').and.returnValue(payments)
  //  component.idStudent = 1;

  //  expect(component).toBeTruthy();
  // });
});
