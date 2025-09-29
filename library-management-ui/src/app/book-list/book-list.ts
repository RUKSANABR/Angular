import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  //used fot ngfor ngif
import { FormsModule } from '@angular/forms';  //used for input ngmodel
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookListComponent {
  books: any[] = [];   //store all book fetched from api
  authorSearch: string = '';

  constructor(private http: HttpClient, public router: Router) {  //make http request
    this.loadBooks();  //fetch all book when component loads
  }

  loadBooks() {  //load books by get method
    this.http.get<any[]>('https://localhost:7019/api/books')
      .subscribe(data => this.books = data);
  }

  searchBooks() {  //search using author
    if (!this.authorSearch.trim()) {
      this.loadBooks();
    } else {
      this.http.get<any[]>(`https://localhost:7019/api/books/search?author=${this.authorSearch}`)
        .subscribe(data => this.books = data);
    }
  }

  deleteBook(id: number) {  //delete book and refresh list
  const confirmed = confirm('Are you sure you want to delete this book?');
  if (confirmed) {
    this.http.delete(`https://localhost:7019/api/books/${id}`)
      .subscribe(() => this.loadBooks());
  }
}

  goToAddBook() {  //add book form
    this.router.navigate(['/books/add']);
  }

  goToEditBook(id: number) {  //edit book form
    this.router.navigate(['/books/edit', id]);
  }
}
