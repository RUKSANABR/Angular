import { Component} from '@angular/core';
import { Studentservice } from '../studentservice';
import { NgFor } from '@angular/common';
 
@Component({
  selector: 'app-student',
  imports: [NgFor],
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent{
 
  students: string[] = [];  //empty array will fetch name from service
 
  constructor(private studentservice: Studentservice) {  //used to inject service and get data
    this.students = this.studentservice.getstudent();
  }   
}
