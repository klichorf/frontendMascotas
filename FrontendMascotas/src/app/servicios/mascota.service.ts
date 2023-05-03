import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.modelo';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  ObtenerRegistros(): Observable <ModeloMascota[]> {
  return  this.http.get<ModeloMascota[]> (`${this.url}/mascotas`)
}
}
