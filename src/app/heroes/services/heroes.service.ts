import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  /**
   * Description
   * @param {HttpClient} privatehttp
   *  */
  constructor(private http: HttpClient) {}

  /**
   * Description: Función para obtener listado completo de heroes
   * @returns {any}
   *  */
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }
}
