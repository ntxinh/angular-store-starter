import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { getState } from '@ngrx/signals';
import { BooksStore } from './books.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './books.component.html',
  // 👇 Providing `BooksStore` at the component level.
  // providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
  readonly store = inject(BooksStore);

  constructor() {
    effect(() => {
      // 👇 The effect will be re-executed whenever the state changes.
      const state = getState(this.store);
      console.log('books state changed', state);
    });
  }
}
