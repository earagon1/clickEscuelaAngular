import { Router, RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HomeComponent } from '../../teacher/home/home.component';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss'],
  animations: [
    trigger('changeDisplay', [
      state('notifications-hide', style({
        display: 'none'
      })),
      state('notifications-show', style({
        display: 'block'
      })),
      transition('notifications-hide=>notifications-show', animate('4500ms')),
      transition('notifications-show=>notifications-hide', animate('4000ms'))
    ]),
  ]
})
export class StudentMenuComponent implements OnInit {
  showFiller = true;
  notificationShow = false;
  notificationsDisplay = 'col-2 notifications-show';
  dinamicDisplay = 'col-10 size-display-dinamic';
  notificationChild = false;
  dashboard = 'Cant. Aprobados';
  checked = false;
  classMenu = 'menu';
  blockDinamicActually = 'reportCard';
  sidenavClass = 'sidenav-open';
  showHomeButton = false;

  currentNotification: Notification;
  isNotification: boolean;
  numberNotifications: number;

  @ViewChild('drawer', { static: true }) sidenav: MatSidenav;
  @ViewChild(HomeComponent) home: HomeComponent;
  @ViewChild('menuNav', { static: true }) menuNav: ElementRef;
  @Input() delay = 300;

  routeLink: string;

  view: string;


  constructor(private router: Router) {
    this.routeLink = router.url;
    this.view = 'student';
   }

  theEvent$;

  changedDisplayNotification() {
    this.notificationShow = this.notificationShow ? false : true;
    if (this.notificationShow) {
      this.dinamicDisplay = 'col-9';
      this.home.changeSizeDashboard(true);
    } else {
      this.dinamicDisplay = 'col-10 size-display-dinamic';
      this.home.changeSizeDashboard(false);
    }
  }


  hideNotificaction() {
    if (!this.notificationChild) {

      this.notificationShow = false;
      this.dinamicDisplay = 'col-10 size-display-dinamic';

    }
  }
  receiveChange($event) {
    this.notificationChild = $event;
  }

  receiveNotificationsNumber($event) {
    this.numberNotifications = $event;
  }

  receiveNotification($event) {
    this.currentNotification = $event;
    this.isNotification = true;
    this.changeBlock($event.type === 'Tarea' ? 'homework' : 'grade');

  }

  changeBlock(newBlock: string) {
    this.blockDinamicActually = newBlock;
    this.router.navigate(['/student/menu/' + newBlock]);

   
  }

  notNotification() {
    this.isNotification = false;
  }

  ngOnInit() {
  }



}
