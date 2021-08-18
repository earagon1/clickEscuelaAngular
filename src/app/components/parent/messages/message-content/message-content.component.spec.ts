import { ChatMessage } from './../../../../models/chat-message';
import { MatMenuModule } from '@angular/material/menu';
import { MessagesService } from './../../../../services/messages.service';
import { ChatmessagesService } from './../../../../services/chat-messages.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';

import { MessageContentComponent } from './message-content.component';


describe('MessageContentComponent', () => {
  let component: MessageContentComponent;
  let fixture: ComponentFixture<MessageContentComponent>;
  let chatmessage: ChatMessage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, MatDialogModule, MatMenuModule],
      declarations: [ MessageContentComponent ],
      providers: [ChatmessagesService, MessagesService, Renderer2],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContentComponent);
    component = fixture.componentInstance;
    chatmessage= new ChatMessage('', new Date(), true );
    component.foundResults.push(chatmessage);
    component.foundResults.push(chatmessage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trueShake call', () => {
    component.trueShake();
    expect(component.shake).toEqual(true);
  });

  it('should noShake call', () => {
    component.noShake();
    expect(component.shake).toEqual(false);
  });

  it('should nextword (if) call', () => {
    component.currentWord = 1;
    component.nextWord();
    expect(component.currentWord).toEqual(0);
  });

  it('should nextword (else) call', () => {
    component.currentWord = 0;
    component.nextWord();
    expect(component.currentWord).toEqual(1);
  });


  it('should previous word (if) call', () => {
    component.currentWord = 0;
    component.previousWord();
    expect(component.currentWord).toEqual(component.foundResults.length-1);

  });

  it('should previous word (else) call', () => {
    component.currentWord = 1;
    component.previousWord();
    expect(component.currentWord).toEqual(0);

  });

});
