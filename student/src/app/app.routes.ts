import { Routes } from '@angular/router';
import { Student } from './students/students';
import { Teacher } from './teacher/teacher';

export const routes: Routes = [
    {path:'',component:Student},
    {path:'teacher',component:Teacher}
];
