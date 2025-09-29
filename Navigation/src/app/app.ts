import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router'; //dynamically load components based on url
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Navigation');
}
