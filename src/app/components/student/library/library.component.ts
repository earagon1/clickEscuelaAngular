import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList,
  ViewChild,
  Renderer2,
} from '@angular/core';
import 'jspdf-autotable';
import * as pdfjsLib from 'pdfjs-dist';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { ModalFrameComponent } from '../modal-frame/modal-frame.component';
import { LibraryFile } from 'src/app/models/library-file';
import { LibraryServiceService } from 'src/app/services/library-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  @ViewChildren('canvas') canvasDiv: QueryList<ElementRef>;

  canvasList: LibraryFile[];
  currentURL: any;

  constructor(
    private renderer: Renderer2,
    private libraryService: LibraryServiceService,
    private sanitazer: DomSanitizer,
    private dialog: MatDialog
  ) {
    this.canvasList = [];
    this.canvasList = libraryService.libraryFiles;
    this.currentURL = '';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    for (let i = 0; i < this.canvasList.length; i++) {
      this.getPdf(this.canvasList[i].url, i);
    }
  }

  openFrame(index) {
    console.log(index);
    this.currentURL = this.sanitazer.bypassSecurityTrustResourceUrl(
      this.canvasList[index].url
    );
    console.log(this.currentURL);

    const dialogRef = this.dialog.open(ModalFrameComponent, {
      data: this.currentURL,
      panelClass: 'url-frame',
      width: '530px',
      height: '90%',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  getPdf(url: string, ind) {
    const that = this.canvasDiv.filter((element, index) => index === ind)[0];
    console.log(that);

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';

    const loadingTask = pdfjsLib.getDocument(url);

    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = that.nativeElement;
        console.log(canvas);
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport,
        };
        page.render(renderContext);
      });
    });
  }

}
