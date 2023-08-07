# AngularStoreStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Explain the code flow

**Get all groups (IT, global, …):**

- Dispatch action `selectAllNewsGroupsAction` trigger effect `selectAllNewsGroups$`
- That effect call API `getAllGroups` get all groups and trigger action `selectAllNewsGroupsFinishedAction`
- That action have reducer to set all groups to state

```tsx
// news.component.ts
ngOnInit() {
  this.store.dispatch(newsAction.selectAllNewsGroupsAction());
}

// news.effects.ts
selectAllNewsGroups$ = createEffect(() =>
  this.actions$.pipe(
    ofType(newsAction.selectAllNewsGroupsAction),
    switchMap(() =>
      this.newsApiService.getAllGroups().pipe(
        map((payload) =>
          newsAction.selectAllNewsGroupsFinishedAction({ payload }),
        ),
        catchError((error) => of(error)),
      ),
    ),
  ),
);

// news.reducer.ts
on(newsAction.selectAllNewsGroupsFinishedAction, (state, { payload }) => {
  const allGroups = [...state.groups, ...payload];
  const allGroupsWithoutDuplicates = [...new Set(allGroups)];
  return {
    ...state,
    groups: [...allGroupsWithoutDuplicates],
  };
}),
```

**Join to a group of SignalR:**

- Dispatch action `joinGroupAction` trigger effect `joinGroupAction$`
- That effect use HubService to join group of SignalR and return action `joinGroupFinishedAction`
- That action do nothing

```tsx
// news.component.ts
public join(): void {
  this.store.dispatch(newsAction.joinGroupAction({ payload: this.group }));
}

// news.effects.ts
joinGroupAction$ = createEffect(() =>
  this.actions$.pipe(
    ofType(newsAction.joinGroupAction),
    switchMap(({ payload }) => {
      this.newsHubService.joinGroup(payload);
      return of(newsAction.joinGroupFinishedAction({ payload }));
    }),
  ),
);

// news.hub.service.ts
joinGroup(group: string): void {
  if (this.hubConnection) {
    this.hubConnection.invoke(NewsHubActions.JoinGroup, group);
  }
}
```

**Add new News item:**

- Create form data
- Dispatch action `sendNewsItemAction` trigger effect `sendNewsItemAction$`
- That effect use HubService to send form data to server and return action `sendNewsItemFinishedAction`
- That action do nothing

```tsx
// news.component.ts
public sendNewsItem(): void {
  this.newsItem = new NewsItem();
  this.newsItem.AddData(
    this.newsItemHeader,
    this.newsItemNewsText,
    this.author,
    this.group,
  );

  this.store.dispatch(
    newsAction.sendNewsItemAction({ payload: this.newsItem }),
  );
}

// news.effects.ts
sendNewsItemAction$ = createEffect(() =>
  this.actions$.pipe(
    ofType(newsAction.sendNewsItemAction),
    switchMap(({ payload }) => {
      this.newsHubService.send(payload);
      return of(newsAction.sendNewsItemFinishedAction({ payload }));
    }),
  ),
);

// news.hub.service.ts
send(newsItem: NewsItem): NewsItem {
  if (this.hubConnection) {
    this.hubConnection.invoke(NewsHubActions.Send, newsItem);
  }
  return newsItem;
}
```
