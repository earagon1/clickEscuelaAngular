import { NotificationsService } from './../../../services/notifications.service';
import { MatBadgeModule } from '@angular/material/badge';
import { Notification } from '../../interfaces/Notification';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  checked = false;
  notificationsHomework: Notification[];
  notificationsChat: Notification[];

  @Output() messageEvent = new EventEmitter<boolean>();
  @Output() openNotification = new EventEmitter<Notification>();
  @Output() notificationNumber = new EventEmitter<number>();


  changeNotification() {
    this.checked = this.checked ? false : true;
    this.messageEvent.emit(this.checked);
  }

  showNotification(notification: Notification) {
    this.openNotification.emit(notification);
  }

  shownotificationsNumber() {
    this.notificationNumber.emit(this.notificationsHomework.length + this.notificationsChat.length);
  }



  constructor(notifications: NotificationsService) {
    this.notificationsHomework = notifications.homeworks;

    this.notificationsChat = notifications.chats;

  }

  ngOnInit() {

    this.shownotificationsNumber();
  }

}
