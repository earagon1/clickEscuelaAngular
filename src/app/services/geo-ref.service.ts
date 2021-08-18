import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoRefService {

  constructor(private connector: HttpClient) {

  }

  getProvinces(): Observable<any> {
    const path = 'https://apis.datos.gob.ar/georef/api/provincias';
    return this.connector.get<any>(path);
  }

  getDistricts(id: string): Observable<any> {
    const path = 'https://apis.datos.gob.ar/georef/api/municipios?provincia=' + id + '&campos=id,nombre&max=100';
    return this.connector.get<any>(path);
  }

  normalizeDirection(direction: string): Observable<any> {
    const path = 'http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=' + direction;
    return this.connector.get<any>(path);
  }

}
