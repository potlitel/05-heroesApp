import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  /**
   * Description
   * @param {HeroesService} privateheroesService
   * */
  constructor(private heroesService: HeroesService) {}

  /**
   * Description
   * @returns {any}
   * */
  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( resp => {
      console.log( resp );
    } )
  }
}
