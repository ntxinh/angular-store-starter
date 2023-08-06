import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css'],
})
export class AllHeroesComponent {
  @Input() heroes: Array<Hero> = [];
  @Output() add = new EventEmitter<number>();
}
