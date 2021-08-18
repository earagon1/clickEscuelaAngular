import { MaterialModule } from './../../../test-mocks/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DecimalPipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { studentService } from 'src/app/services/student.service';
import { AccountService } from 'src/app/services/account.service';
import { PaymentService } from './../../../services/payment.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ PaymentComponent ],
      providers: [PaymentService, AccountService, studentService, DecimalPipe],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
