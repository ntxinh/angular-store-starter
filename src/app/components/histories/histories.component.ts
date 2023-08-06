import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectHistories } from 'src/app/store/history/history.selectors';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
})
export class HistoryComponent implements OnInit {
  title = 'Histories';

  histories: Array<string> = [];

  constructor(private store: Store) {
    this.store.select(selectHistories).subscribe((histories) => {
      this.histories = histories;
    });
  }

  ngOnInit() {}
}
