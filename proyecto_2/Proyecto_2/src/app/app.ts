import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Contador} from './contador/contador';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto_2');
}
