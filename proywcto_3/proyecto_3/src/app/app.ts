import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './saludo/saludo';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_3');
}
