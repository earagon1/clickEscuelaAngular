import { Observable } from "rxjs";

export class MatDialogMock {
    // When the component calls this.dialog.open(...) we'll return an object
    // with an afterClosed method that allows to subscribe to the dialog result observable.
    open() {
      return {
        afterClosed: () => Observable
      };
    }

    close() {
      return true;
    }

    updateSize(){
      return true;
    }
  };