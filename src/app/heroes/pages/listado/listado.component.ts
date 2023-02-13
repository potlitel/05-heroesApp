import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  // styles: [
  //   `
  //     mat-card {
  //       margin-top: 20px;
  //     }
  //   `,
  // ],
})
export class ListadoComponent implements OnInit {
  heroes: Heroe[] = [];
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
    this.heroesService.getHeroes().subscribe((resp) => (this.heroes = resp));
  }
}
