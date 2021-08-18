import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  tabs: string[];
  @Input() view;

  constructor() {

  }

  ngOnInit(): void {
    if (this.view === 'student') {
      this.tabs = ['Notificaciones'];
    } else {

      this.tabs = ['Mensajes', 'Notificaciones'];
    }
  }

}
