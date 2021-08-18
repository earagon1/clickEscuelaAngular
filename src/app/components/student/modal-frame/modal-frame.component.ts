import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-frame',
  templateUrl: './modal-frame.component.html',
  styleUrls: ['./modal-frame.component.css']
})
export class ModalFrameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalFrameComponent>, @Inject(MAT_DIALOG_DATA) public data: SafeResourceUrl) {

  }

  ngOnInit() {
  }

  onClose() {

    this.dialogRef.close();
  }

}
