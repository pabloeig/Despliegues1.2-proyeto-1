import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DniCalculadora } from './dni-calculadora/dni-calculadora';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DniCalculadora],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_dni');
}
