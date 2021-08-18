import { Comment } from '../../../models/comment';
import { Component, Inject, OnInit, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  returnDataComment: any;

  constructor(public dialogRef: MatDialogRef<ModalEditComponent>, @Inject(MAT_DIALOG_DATA) public data: Comment) {
    this.returnDataComment = 'holita';
   }

  ngOnInit() {

  }
  closeOperation(comment) {

    if (comment !== this.data.content) {
    this.returnDataComment = comment;
    } else { this.returnDataComment = false; }
    this.dialogRef.close(this.returnDataComment);

  }
  getCommentContent() {
    return this.data.content;
  }

}
