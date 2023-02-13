import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent {
  // @Input() heroe: Heroe | undefined;
  @Input() heroe!: Heroe;

  /**
   * Description: Constructor de la clase
   *  */
  constructor() {}
}
