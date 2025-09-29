import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercomponent.html',
  styleUrls: ['./usercomponent.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];  //empty array to store data fetched the API
 
  constructor(private http: HttpClient) {}   //Injects HttpClient service to make requests
 
  ngOnInit(): void {    //get called after component is initialized
    this.fetchUsers();   //load user data.
  }
 
  fetchUsers(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')  //get request
      .subscribe({    //handles the asynchronous response
        next: (data) => this.users = data,
        error: (error) => console.error('Error fetching users:', error)
      });
  }
}