import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Student {
  name: string = 'Ruksana';
  age: number = 24;

  updateStudent() {
    this.name = 'Ruksana B R';
    this.age = 24;
  }
}
