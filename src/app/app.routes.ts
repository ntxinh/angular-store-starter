import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'users', component: UsersComponent },
  // { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirect to users page by default
  // { path: '**', component: PageNotFoundComponent },
];
