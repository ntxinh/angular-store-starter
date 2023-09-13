import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectHistories } from 'src/app/store/history/history.selectors';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
})
export class HistoryComponent implements OnInit, OnDestroy {
  title = 'Histories';

  histories: Array<string> = [];
  subscription: Subscription;

  constructor(private store: Store) {
    this.subscription = this.store.select(selectHistories).subscribe((histories) => {
      this.histories = histories;
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
