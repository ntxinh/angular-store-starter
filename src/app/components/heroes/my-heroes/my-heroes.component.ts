import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css'],
})
export class MyHeroesComponent {
  @Input() heroes: Array<Hero> = [];
  @Output() remove = new EventEmitter<number>();
}
