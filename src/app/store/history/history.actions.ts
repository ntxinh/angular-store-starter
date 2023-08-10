import { createActionGroup, props } from '@ngrx/store';

export const HistoriesActions = createActionGroup({
  source: 'Histories',
  events: {
    'Add History': props<{ history: string }>(),
    'Retrieve History': props<{ histories: Array<string> }>(),
  },
});
