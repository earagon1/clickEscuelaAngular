import { ConfigurationService } from './../../../services/configuration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {
  selectedMenu: boolean;
  selectedOption: number;

  emailSubject: string;
  emailContent: string;

  constructor(private confService: ConfigurationService) {
    this.selectedOption = 0;
    this.emailSubject = confService.getEmailSubject;
    this.emailContent = confService.getEmailContent;
  }

  selectMenuOption(opt: number) {
    this.selectedMenu = true;
    this.selectedOption = opt;
  }

  goToMainMenu() {
    this.selectedMenu = false;
    this.selectedOption = 0;
  }

  saveEmailConfig() {
    this.confService.setEmailContent(this.emailContent);
    this.confService.setEmailSubject(this.emailSubject);
  }

  get configService(): ConfigurationService {
    return this.confService;
  }

  ngOnInit() {
  }
}
