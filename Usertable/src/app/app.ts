import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './usercomponent/usercomponent';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,UserComponent,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Usertable');
}
