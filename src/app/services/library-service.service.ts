import { LibraryFile } from '../models/library-file';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibraryServiceService {
  filesList: LibraryFile[];

  constructor() {
    this.filesList = [];
    this.filesList.push(
      new LibraryFile(
        'Practica del lenguaje',
        'Santillana',
        'Lengua',
        'http://localhost:4200/assets/pdf/prueba1.pdf?'
      )
    );
    this.filesList.push(
      new LibraryFile(
        'Inteligencia matematica',
        'Granica',
        'Matematica',
        'http://localhost:4200/assets/pdf/prueba2.pdf?'
      )
    );
    this.filesList.push(
      new LibraryFile(
        'Biologia 3 ',
        'Santillana',
        'Biologia',
        'http://localhost:4200/assets/pdf/prueba3.pdf?'
      )
    );
    this.filesList.push(
      new LibraryFile(
        'Manual de javascript',
        'Miguel Angel Alvarez/ Manu Gutierrez ',
        'Programacion',
        'http://localhost:4200/assets/pdf/manual.pdf?'
      )
    );
  }

  get libraryFiles() {
    return this.filesList;
  }
}
