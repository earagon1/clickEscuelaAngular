import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

constructor(public snackBar: MatSnackBar) { }


showSnackBar(message: string, action: string, type: string) {

  this.snackBar.open(
     message,
     action, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 3000,
      panelClass: type.toLowerCase()
    });
  }

  showSnackBarWithoutDuration(message: string, action: string, type: string) {

    this.snackBar.open(
       message,
       action, {
        panelClass: type.toLowerCase()
      });
    }
  }








