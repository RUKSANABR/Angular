import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Welcome } from './welcome/welcome';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Welcome, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-app');
}