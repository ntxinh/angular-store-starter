import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  HeroActions,
  HeroApiActions,
  selectAllHeroes,
  selectMyHeroes,
} from 'src/app/store/hero';

@Component({
  // selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  title = 'Heroes';

  allHeroes$ = this.store.select(selectAllHeroes);
  myHeroes$ = this.store.select(selectMyHeroes);

  onAdd(heroId: number) {
    this.store.dispatch(HeroActions.addHero({ heroId }));
  }

  onRemove(heroId: number) {
    this.store.dispatch(HeroActions.removeHero({ heroId }));
  }

  constructor(private store: Store) {}

  ngOnInit() {
    // Seed data
    const heroes = [
      { id: 12, name: 'Airi' },
      { id: 13, name: 'Aleister' },
      { id: 14, name: 'Alice' },
      { id: 15, name: 'Allain' },
      { id: 16, name: 'Amily' },
      { id: 17, name: 'Annette' },
      { id: 18, name: 'Aoi' },
      { id: 19, name: 'Arduin' },
      { id: 20, name: 'Arthur' },
    ];
    this.store.dispatch(HeroApiActions.retrievedHeroList({ heroes }));
  }
}
