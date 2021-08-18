import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private emailSubject: string;
  private emailContent: string;
  constructor() {
    this.emailContent = '';
    this.emailSubject = '';
  }

  setEmailSubject(subject: string) {
    this.emailSubject = subject;
  }
  get getEmailSubject() {
    return this.emailSubject;
  }

  setEmailContent(content: string) {
    this.emailContent = content;
  }
  get getEmailContent() {
    return this.emailContent;
  }

}
