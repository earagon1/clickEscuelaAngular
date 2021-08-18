import { Notification } from '../models/notification';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notificationsHomework: Notification[];
  private notificationsChat: Notification[];

  constructor() {

    this.notificationsHomework = [
      {
        type: 'Tarea',
        tittle: 'La tarea de Ingles termino',
      },
      {
        type: 'Tarea',
        tittle: 'La tarea de Matematica termino',
      },
      {
        type: 'Tarea',
        tittle: 'La tarea de Geografia termino',
      }
    ];

    this.notificationsChat = [
      {
        type: 'Consulta Padre',
        tittle: 'Fechas de examen',
      },
      {
        type: 'Consulta Directivo',
        tittle: 'Fechas de examen',
      }
    ];
  }

  get homeworks() {
    return this.notificationsHomework;
  }
  get chats() {
    return this.notificationsChat;
  }

}
