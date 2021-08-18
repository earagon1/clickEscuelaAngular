import { MatSidenav } from '@angular/material/sidenav';
import { MaterialModule } from './../../../test-mocks/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


export class SidenavMock {
  open() {}
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ RegisterComponent],
      providers: [{provide: MatSidenav, useClass: SidenavMock}],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeBlock', () => {
    spyOn(component.routerInjected, 'navigate').and.callThrough();
    component.blockDinamicActually = 'test';
    component.changeBlock('new');
    expect(component.blockDinamicActually).toEqual('new');
  });
});
