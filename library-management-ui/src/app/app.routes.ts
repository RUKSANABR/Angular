import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list';
import { BookFormComponent } from './book-form/book-form';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },  //page loads that when it runs
  { path: 'books', component: BookListComponent },  //book in table
  { path: 'books/add', component: BookFormComponent },  //add books
  { path: 'books/edit/:id', component: BookFormComponent }  //edit book
];
