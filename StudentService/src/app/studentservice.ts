import { Injectable } from '@angular/core';  //di used to inject in other components

@Injectable({
  providedIn: 'root'  //instance that will be available for entire app
})
export class Studentservice {

  private students : string[] =["Ruksana","Joel","Steffy"];

  getstudent(): string[]{
    return this.students;  //return student array
  }
  
}
