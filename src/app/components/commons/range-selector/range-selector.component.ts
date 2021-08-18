import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {SVG_CONST} from '../../../enums/svg-constants';

@Component({
  selector: 'app-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss']
})



export class RangeSelectorComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  currentOption: -1;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<RangeSelectorComponent>
    ) {
      iconRegistry.addSvgIconLiteral('csv-icon', sanitizer.bypassSecurityTrustHtml(SVG_CONST.CSV_ICON));
      iconRegistry.addSvgIconLiteral('pdf-icon', sanitizer.bypassSecurityTrustHtml(SVG_CONST.PDF_ICON));
     }

  ngOnInit() {
  }

  acceptChange() {
    const dataResult = {
      range: this.range.value,
      option: this.currentOption
    };

    this.dialogRef.close(dataResult);
  }

  setExportOption(option) {
    this.currentOption = option;
    this.acceptChange();
  }


}
