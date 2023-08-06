import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroesComponent, AllHeroesComponent, MyHeroesComponent],
})
export class HeroesModule {}
