import { MatDialog } from '@angular/material/dialog';
import { ChatMessage } from '../../../../models/chat-message';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatmessagesService } from '../../../../services/chat-messages.service';
import { ChatModule } from '../../../../models/chat-module';

import { MessagesService } from './../../../../services/messages.service';
import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  QueryList,
  Input,
  Renderer2,
} from '@angular/core';
import { Message } from 'src/app/models/message';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { ConfirmDialogComponent } from 'src/app/components/commons/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss'],
})
export class MessageContentComponent implements OnInit {
  colors: string[];
  selectedColor: string;
  messageList: Message[];
  displayedColumns: string[];
  dataSource: any;
  color: string;

  openSearch: boolean;

  chatModules: ChatModule[];

  @Input() currentTab;
  @Input() view;
  @Input() index;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren('userAvatar') avatars: QueryList<HTMLDivElement>;
  @ViewChild('chatContainer') chat: ElementRef;
  @ViewChild('chatContent') chatContent: ElementRef;
  @ViewChild('buttonBottom') bottomButton: ElementRef;
  @ViewChild('buttonSearch') search: ElementRef;
  @ViewChild('chatInputContent') inputContent: ElementRef;
  @ViewChildren('chatItem') chatItems: QueryList<ElementRef>;

  finalizetest: boolean;

  chatOpen: boolean;

  position: TooltipPosition = 'left';

  shake = false;

  lastSearchWord: string;

  currentSearch: boolean;
  minimizedChat: boolean;

  foundResults: ChatMessage[];
  scrollRanges: number[];
  indexResults: number[];
  windowHeight: number;

  currentWord: number;

  messagesLenght: number;

  root;

  constructor(
    private messageService: MessagesService,
    private chatmoduleService: ChatmessagesService,
    private snackbar: MatSnackBar,
    private renderer: Renderer2,
    private dialog: MatDialog
  ) {
    this.messageList = [];
    this.colors = [
      '#049dd975',
      '#14a6479c',
      '#f2c84b7c',
      '#f24e2975',
      '#f2b9b37e',
    ];
    this.selectedColor = this.randomColor();

    this.root = document.documentElement;
    this.color = '9acd8dc5';
    this.openSearch = false;
    this.chatModules = chatmoduleService.chatmodules;

    this.finalizetest = true;

    this.chatOpen = false;

    this.lastSearchWord = '';

    this.currentSearch = false;

    this.foundResults = [];
    this.scrollRanges = [];
    this.indexResults = [];
    this.currentWord = 0;

    this.messagesLenght = chatmoduleService.messagesLenght;

    this.windowHeight = window.innerWidth;
    this.minimizedChat = false;
  }

  def() {
    return null;
  }

  trueShake() {
    this.shake = true;
  }
  noShake() {
    this.shake = false;
  }

  openSnackbar(message: string) {
    this.snackbar.open(message, '', {
      duration: 3000,
    });
  }

  nextWord() {
    if (this.foundResults.length - 1 === this.currentWord) {
      this.currentWord = 0;
    } else {
      this.currentWord++;
    }


    this.clearMarks();
    this.chatContent.nativeElement.scrollTop =
      this.scrollRanges[this.currentWord];
    this.foundResults[this.currentWord].content = this.foundResults[
      this.currentWord
    ].content.replace(
      this.lastSearchWord,
      '<mark>' + this.lastSearchWord + '</mark>'
    );

  }

  previousWord() {
    if (this.currentWord === 0) {
      this.currentWord = this.foundResults.length - 1;
    } else {
      this.currentWord--;
    }
    this.clearMarks();
    this.chatContent.nativeElement.scrollTop =
      this.scrollRanges[this.currentWord];
    this.foundResults[this.currentWord].content = this.foundResults[
      this.currentWord
    ].content.replace(
      this.lastSearchWord,
      '<mark>' + this.lastSearchWord + '</mark>'
    );

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewInputSearch() {
    if (!this.openSearch) {
      this.search.nativeElement.style.width = '230px';
      this.openSearch = true;
      this.search.nativeElement.childNodes[3].focus();
    } else {
      this.foundResults = [];
      this.scrollRanges = [];
      this.currentSearch = false;
      this.clearMarks();
      this.goBottom();
      this.search.nativeElement.style.width = '35px';
      this.openSearch = false;
      this.search.nativeElement.childNodes[3].value = '';
    }
  }

  addChatMessage(input, autor) {

    if (this.chatmoduleService.chatmodules.length === 0) {
      this.chatmoduleService.addChatModule(autor);
      this.chatModules = this.chatmoduleService.chatmodules;

    }

    if (input.value !== '' ) {
      if (this.chatmoduleService.lastChatModule.autor !== autor) {
        this.chatmoduleService.addChatModule(autor);
      }

      this.chatmoduleService.addChatMessage(input.value);
      input.value = '';
      setTimeout(() => {
        this.goBottom();
      }, 500);
    }
  }

  addChatMessageSting(input, autor) {
    if (this.chatmoduleService.chatmodules.length === 0) {
      this.chatmoduleService.addChatModule(autor);
      this.chatModules = this.chatmoduleService.chatmodules;

    }
    if (this.chatmoduleService.lastChatModule.autor !== autor) {
      this.chatmoduleService.addChatModule(autor);
    }

    this.chatmoduleService.addChatMessage(input);
    setTimeout(() => {
      this.goBottom();
    }, 500);
  }

  keySearch($event) {
  }

  searchWord(input) {
    this.foundResults = [];
    this.scrollRanges = [];
    this.messagesLenght = this.chatmoduleService.messagesLenght;

    const word = input.value;

    if (word === '') {
      this.currentSearch = false;
      this.clearMarks();
    } else {
      if (word.charAt(0) === '-' && word.charAt(1) === '-') {
        this.testChat(input);
      } else {
        this.currentSearch = true;

        let i = 0;

        let numbermessage = 0;
        let indexmessage = 0;
        let currentMessage = null;

        for (const module of this.chatModules) {
          for (const messages of module.messages) {
            if (messages.content.search(word) !== -1) {
              numbermessage = i;
              indexmessage = messages.content.search(word);
              currentMessage = messages;

              this.foundResults.push(currentMessage);
              this.scrollRanges.push(this.calculateVariation(numbermessage));
              this.indexResults.push(numbermessage);
            }
            i++;
          }
        }


        if (this.foundResults[0] !== undefined) {
          this.chatContent.nativeElement.scrollTop = this.scrollRanges[0];
 
          if (word !== this.lastSearchWord) {
            this.clearMarks();
            this.foundResults[0].content = this.foundResults[0].content.replace(
              word,
              '<mark>' + word + '</mark>'
            );
            this.lastSearchWord = word;
          }
          this.currentSearch = true;
        } else {
          this.openSnackbar('No se enontraron resultados para: \'' + word + '\'');
          this.foundResults = [];
          this.scrollRanges = [];
          this.currentSearch = false;
          this.clearMarks();
          this.goBottom();
        }
      }
    }
  }

  resetMark(word) {
    let currentMessage = null;

    for (const module of this.chatModules) {
      for (const messages of module.messages) {
        if (
          messages.content
            .toLocaleLowerCase()
            .search(word.toLocaleLowerCase()) !== -1
        ) {
          currentMessage = messages;

          currentMessage.content = currentMessage.content.replace(word, '');
        }
      }
    }
  }

  recalculateScrollRanges() {
    this.scrollRanges = [];

    for (const index of this.indexResults) {
      this.scrollRanges.push(this.calculateVariation(index));
    }

    if (this.scrollRanges.length > 0) {
      this.chatContent.nativeElement.scrollTop = this.scrollRanges[0];
    }
  }

  clearMarks() {
    this.resetMark('<mark>');
    this.resetMark('</mark>');
  }

  confirmDialog() {
    {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: '¿Esta seguro que quiere borrar todo el chat?',
        width: '60%',
        height: '150px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.clearChat();
        }
      });
    }
  }

  clearChat() {
    this.chatmoduleService.clear();
    this.chatModules = [];

  }

  scrollVariation(numberMessage, cantMessages) {

    const scrollTop = this.chatContent.nativeElement.scrollTop;
    const scrollHeight = this.chatContent.nativeElement.scrollHeight;
    const clientHeight = this.chatContent.nativeElement.clientHeight;

    const variation =
      ((scrollHeight - clientHeight) / cantMessages) * (numberMessage + 2);
    return variation;
  }

  viewScroll() {
 
  }

  testChat(input) {
    const regExp = /^([0-9])*$/;

    const inputContent = input.value.split(' -');

    if (inputContent[0] === '--start-test') {
      this.viewInputSearch();

      this.finalizetest = false;

      let miliseconds = 5000;

      if (regExp.test(inputContent[1])) {
        const num = parseInt(inputContent[1], 10);

        if (num > 5000) {
          miliseconds = num;
        }
      }

      if (!this.finalizetest) {
        this.openSnackbar(
          'Se inicio el modo testing del chat. ms:' + miliseconds
        );

        const inter = setInterval(() => {
          this.addChatMessageSting(
            'Este es un mensaje de prueba autogenerado. Solo para test interno',
            'receiver'
          );

          if (this.finalizetest) {
            clearInterval(inter);
            this.openSnackbar('Se finalizo el modo de testing con exito...');
          }
        }, miliseconds);
      }
    } else if (inputContent[0] === '--stop-test') {
      this.viewInputSearch();

      this.finalizetest = true;
    } else {
      this.openSnackbar('No ingreso un comando valido revise la sintaxis');
    }
  }

  hideInputSearch() {
    if (!this.openSearch) {
      this.search.nativeElement.style.width = '35px';
    }
  }

  ngOnInit() {
    this.displayedColumns = ['message'];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    // this.dataSource.data = this.messageList
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.renderer.listen('document', 'keydown', ($event) => {
      if ($event.key === 'b' && $event.ctrlKey) {
        this.viewInputSearch();
      }
      if ($event.key === 'm' && $event.ctrlKey) {
        this.minimizeChat();
      }
    });

    this.trimMessages();

  }

  trimMessages() {
    if (this.currentTab === 'Mensajes') {
      this.messageList = this.messageService.messageList.filter(
        (a) => a.type === this.currentTab.slice(0, -1)
      );
      this.dataSource.data = this.messageList;
    } else if (this.currentTab === 'Notificaciones') {
      this.messageList = this.messageService.messageList.filter(
        (a) => a.type === this.currentTab.slice(0, -2)
      );
      this.dataSource.data = this.messageList;
    }
  }

  randomColor() {
    const num = Math.floor(Math.random() * (4 - 0)) + 0;
    return this.colors[num];
  }

  closeChat() {
    this.chat.nativeElement.style.transform = 'translateX(100%)';
    this.chatOpen = false;
  }

  minimizeChat() {
    if (!this.minimizedChat) {
      this.chat.nativeElement.style.height = '9vh';
      this.minimizedChat = true;
    } else {
      this.chat.nativeElement.style.height = '100vh';
      this.minimizedChat = false;
    }
  }
  openChat() {
    this.chat.nativeElement.style.transform = 'translateX(-1%)';
    this.chatContent.nativeElement.scrollTop =
      this.chatContent.nativeElement.scrollHeight;
    this.chatOpen = true;

    this.chatItems.forEach((elem) => {
    });
  }

  calculateVariation(index): number {
    let retorno = 0;
    let i = 0;

    this.chatItems.forEach((elem) => {
      if (i < index) {
        retorno += elem.nativeElement.clientHeight;
        i++;
      }
    });
    return retorno;
  }

  goBottom() {
    this.chatContent.nativeElement.scrollTop =
      this.chatContent.nativeElement.scrollHeight;
  }
  goNewMessage() {
    this.chatContent.nativeElement.scrollTop =
      this.chatContent.nativeElement.scrollHeight -
      this.chatContent.nativeElement.clientHeight;
  }
  showScroll() {

    if (this.windowHeight !== window.innerWidth) {
      this.windowHeight = window.innerWidth;
      this.recalculateScrollRanges();
    }
    if (
      Math.round(this.chatContent.nativeElement.scrollTop + 1) <
      this.chatContent.nativeElement.scrollHeight -
        this.chatContent.nativeElement.clientHeight
    ) {
      this.bottomButton.nativeElement.style.opacity = '1';
    } else {
      this.bottomButton.nativeElement.style.opacity = '0';
    }
  }

  showChildrens() {
    this.avatars.forEach(
      (elem, index) => console.log(elem)

      // element1.nativeElement
    );
  }

  setColor(i) {
    const num = i - this.indexation(i);
    this.root.style.setProperty('--background-header', this.colors[num]);
  }

  indexation(index) {
    const large = this.colors.length;
    return Math.floor(index / large) * large;
  }

  getColor(i) {
    const num = i - this.indexation(i);

    return this.colors[num];
  }
}
