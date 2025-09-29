import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
   styleUrls: ['./book-form.css']
})
export class BookFormComponent {
  book: any = { title: '', author: '', isbn: '', price: 0, publishedDate: '' };  //field
  isEdit = false;  //edit or add mode

  constructor(
    private http: HttpClient,  //http request
    private route: ActivatedRoute,  //to get paramter like id
    public router: Router  //navigation
  ) {
    const id = this.route.snapshot.paramMap.get('id');  //edit, get the id and fetch details
    if (id) {
      this.isEdit = true;
      this.http.get<any>(`https://localhost:7019/api/books/${id}`)
        .subscribe(data => this.book = data);
    }
  }

  saveBook() {  //save the book
    if (this.isEdit) {
      this.http.put(`https://localhost:7019/api/books/${this.book.id}`, this.book)
        .subscribe(() => this.router.navigate(['/books']));
    } else {  //create new book
      this.http.post(`https://localhost:7019/api/books`, this.book)
        .subscribe(() => this.router.navigate(['/books']));
    }
  }

  cancel() {  //cancel button
    this.router.navigate(['/books']);
  }
}
