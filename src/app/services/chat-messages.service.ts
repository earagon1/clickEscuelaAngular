import { ChatMessage } from '../models/chat-message';
import { ChatModule } from '../models/chat-module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatmessagesService {


  chatmodules: ChatModule[];

  constructor() {
    this.chatmodules = [];

    const chatSender = new ChatModule('autor');

    chatSender.addChatMessage(new ChatMessage('Hola como estas buenas tardes', new Date(), true));
    chatSender.addChatMessage(new ChatMessage('Queria hacerle una consulta sobre el acto del 25 de mayo', new Date(), true));
    chatSender.addChatMessage(new ChatMessage('Puede llevar ropa que ya tengo para que se disfrace', new Date(), true));

    this.chatmodules.push(chatSender);

    const chatReceiver = new ChatModule('receiver');

    chatReceiver.addChatMessage(new ChatMessage('Nosotros ya contamos con la vestimenta, pero no creo que haya algun problema',
     new Date(), true));
    chatReceiver.addChatMessage(new ChatMessage('Dejame que lo consulto con la profesora MArgarita de teatro', new Date(), true));
    chatReceiver.addChatMessage(new ChatMessage('Yo no creo que haya problema alguno', new Date(), true));

    this.chatmodules.push(chatReceiver);

    const chatSender2 = new ChatModule('autor');

    chatSender2.addChatMessage(new ChatMessage('<p>Dale muchisimas gracias entonces espero su pronta respuesta</p>', new Date(), true));
    chatSender2.addChatMessage(new ChatMessage('haya', new Date(), true));
    chatSender2.addChatMessage(new ChatMessage('haya', new Date(), true));
    chatSender2.addChatMessage(new ChatMessage('haya', new Date(), true));
    chatSender2.addChatMessage(new ChatMessage('haya', new Date(), true));
    chatSender2.addChatMessage(new ChatMessage('haya', new Date(), true));
    chatSender2.addChatMessage(new ChatMessage('haya', new Date(), true));
    chatSender2.addChatMessage(new ChatMessage('haya', new Date(), true));
    chatSender2.addChatMessage(new ChatMessage('haya', new Date(), true));



    this.chatmodules.push(chatSender2);






  }

  clear() {
   this.chatmodules = [];
  }

  addChatModule(autor) {
    this.chatmodules.push(new ChatModule(autor));
  }

  get messagesLenght() {
    let i = 0;
    for (const module of this.chatmodules) {
      for (const m of module.messages) {
        i++;
      }
    }

    return i;
  }

  addChatMessage(message) {
    this.chatmodules[this.chatmodules.length - 1].addChatMessage(
      new ChatMessage(message, new Date(), true));

  }

  get modulesList() {
    return this.chatmodules;
  }

  get lastChatModule() {
    return this.chatmodules[this.chatmodules.length - 1];
  }

}
