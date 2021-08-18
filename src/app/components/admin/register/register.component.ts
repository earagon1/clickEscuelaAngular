import { IconGeneratorService } from './../../../services/icon-generator.service';
import {animate, state, style, transition, trigger, } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('changeDisplay', [
      state(
        'notifications-hide',
        style({
          display: 'none',
        })
      ),
      state(
        'notifications-show',
        style({
          display: 'block',
        })
      ),
      transition('notifications-hide=>notifications-show', animate('4500ms')),
      transition('notifications-show=>notifications-hide', animate('4000ms')),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  @ViewChild('drawer', { static: true }) sidenav: MatSidenav;
  @ViewChild('menuNav', { static: true }) menuNav: ElementRef;

  showFiller = true;
  notificationShow = false;
  notificationsDisplay = 'col-2 notifications-show';
  dinamicDisplay = 'col-10 size-display-dinamic';
  notificationChild = false;
  dashboard = 'Cant. Aprobados';
  checked = false;
  classMenu = 'menu';
  blockDinamicActually = 'account';
  sidenavClass = 'sidenav-open';
  showHomeButton = false;

  currentNotification: Notification;
  isNotification: boolean;
  numberNotifications: number;

  constructor(private router: Router, public icons: IconGeneratorService) {
  }

  ngOnInit() {
    this.selectedOption();
  }

  changeBlock(newBlock: string) {
    this.blockDinamicActually = newBlock;
    this.router.navigate(['/admin/register/' + newBlock]);
  }

  get routerInjected() {
    return this.router;
  }

  selectedOption() {

    const parts = this.router.url.split('/');
    console.log(parts);
    this.blockDinamicActually = parts[parts.length - 1];
  }
}
