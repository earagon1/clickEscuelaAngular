import { SVG_CONST } from '../../../../enums/svg-constants';
import { WorkGroupService } from './../../../../services/work-group.service';
import { WorkGroup } from '../../../../models/work-group';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent implements OnInit {
  @Input() group: WorkGroup;
  @Input() currentIndex: number;
  @ViewChild('fileLoader') attachs: ElementRef;
  @ViewChild('previewThumb') thumb: ElementRef;

  selectedFiles: any[];

  currentSender: string;
  selectedTab: number;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private workGroupService: WorkGroupService,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIconLiteral(
      'thumbs-up',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.THUMBUP_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'in-time',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.IN_TIME)
    );
    iconRegistry.addSvgIconLiteral(
      'over-time',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.OVER_TIME)
    );

    iconRegistry.addSvgIconLiteral(
      'to-do',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.TO_DO)
    );
    iconRegistry.addSvgIconLiteral(
      'realized',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.REALIZED)
    );
    this.currentSender = 'Nicolas Lencinas';
    this.selectedTab = 1;
    this.selectedFiles = [];
  }

  changeSelectedTab(num: number) {
    this.selectedTab = num;
  }

  addComment(index, comment) {
    this.workGroupService.addComment(index, this.currentSender, comment);
  }

  addHistory(index, history) {
    this.workGroupService.addHistory(index, this.currentSender, history);
  }

  ngOnInit() {}

  getConsigns() {
    let wordReturn = '';
    let numberindex = 0;
    for (const consign of this.group.consigns) {
      numberindex++;
      wordReturn += numberindex + ')' + consign + '\n\n';
    }
    return wordReturn;
  }

  getFileName() {
    return this.selectedFiles[0].name;
  }

  // funcion nula
  unused() {
    return null;
  }

  showThumbs() {
    this.selectedFiles = [];
    this.selectedFiles.push(this.attachs.nativeElement.files[0]);


    const input = this.selectedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.thumb.nativeElement.src = reader.result;

      // Esta parte del codigo switchea los distintos tipos y elige la imagen correcta
      switch (this.selectedFiles[0].type) {
        case 'application/pdf':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/pdf.svg';
          break;
        case 'text/html':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/html.svg';
          break;
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/xls.svg';
          break;
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/doc.svg';
          break;

        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/ppt.svg';
          break;

        case 'text/css':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/css.svg';
          break;

        case 'text/plain':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/txt.svg';
          break;

        case 'application/postscript':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/ai.svg';
          break;

        case 'text/xml':
          this.thumb.nativeElement.src =
            '../../../../../assets/images/thumbs/xml.svg';
          break;

        // En algunos casos el type sale vacio se obtiene la extension mediante el nombre completo del archivo
        case '':
          const splitWord = this.selectedFiles[0].name.split('.');

          if (splitWord[splitWord.length - 1] === 'php') {
            this.thumb.nativeElement.src =
              '../../../../../assets/images/thumbs/php.svg';
          }

          if (splitWord[splitWord.length - 1] === 'scss') {
            this.thumb.nativeElement.src =
              '../../../../../assets/images/thumbs/css.svg';
          }

          if (splitWord[splitWord.length - 1] === 'psd') {
            this.thumb.nativeElement.src =
              '../../../../../assets/images/thumbs/ps.svg';
          } else {
            this.thumb.nativeElement.src =
              '../../../../../assets/images/thumbs/unknown.svg';
          }

          break;

        // El caso defualt se contemplan extensiones de archivos
        // no esperadas pero se comprueba que no sea una imagen por que estas ya tienen miniaturas
        default:
          if (this.selectedFiles[0].type.split('/')[0] !== 'image') {
            this.thumb.nativeElement.src =
              '../../../../../assets/images/thumbs/unknown.svg';
          }
          if (this.selectedFiles[0].type.split('/')[0] === 'video') {
            this.thumb.nativeElement.src =
              '../../../../../assets/images/thumbs/video.svg';
          }
          break;
      }
    };

    if (input) {
      reader.readAsDataURL(input);
    } else {
      this.thumb.nativeElement.src = '';
    }
  }

  deleteAttach() {
    this.selectedFiles = [];
  }

  loadAttachs() {
    const cantArch = this.selectedFiles.length > 1 ? ' archivos' : ' archivo';
    this.addHistory(
      this.currentIndex,
      'Ah adjuntado ' + this.selectedFiles.length + cantArch
    );
    this.deleteAttach();
  }
}
