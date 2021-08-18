import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dialogRef.updateSize('550px', this.defineHeightSize() + 'px');
  }

  defineHeightSize() {
    let size = 0;
    if (this.data.adress) {size += 45; }
    if (this.data.telephone) {size += 45; }
    if (this.data.email) {size += 45; }
    if (this.data.web) {size += 45; }
    if (this.data.celular) {size += 45; }
    if (this.data.whatsapp) {size += 45; }
    if (this.data.telegram) {size += 45; }
    if (this.data.linkedin) {size += 45; }

    size += 45 + 48;

    return size;


  }

}
