import { MaterialModule } from 'src/app/test-mocks/material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { ConfigurationComponent } from './configuration.component';

describe('ConfigurationComponent', () => {
  let component: ConfigurationComponent;
  let fixture: ComponentFixture<ConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ ConfigurationComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectedMenuOption', () => {
    component.selectedMenu = false;
    component.selectedOption = 3;
    component.selectMenuOption(5);
    expect(component.selectedMenu).toEqual(true);
    expect(component.selectedOption).toEqual(5);
    component.goToMainMenu();
    expect(component.selectedMenu).toEqual(false);
    expect(component.selectedOption).toEqual(0);

  });

  it('selectedMenuOption', () => {
  const spyContent = spyOn(component.configService, 'setEmailContent').and.callThrough();
  const spySubject = spyOn(component.configService, 'setEmailSubject').and.callThrough();

  component.saveEmailConfig();

  expect(spyContent).toHaveBeenCalled();
  expect(spySubject).toHaveBeenCalled();




  });


});
