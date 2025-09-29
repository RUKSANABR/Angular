import { Injectable } from '@angular/core';  //injecting service into component
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:7019/api/books';  //base url of api

  constructor(private http: HttpClient) {}  //built in service of http request

  getBooks(): Observable<Book[]> {   //get all books
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {  //get book by id
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<any> {    //add new book
    return this.http.post(this.apiUrl, book);
  }

  updateBook(id: number, book: Book): Observable<any> {  //update book
    return this.http.put(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<any> {   //delete book by id
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  searchByAuthor(author: string): Observable<Book[]> {  //search book using author
    return this.http.get<Book[]>(`${this.apiUrl}/search?author=${author}`);
  }
}
