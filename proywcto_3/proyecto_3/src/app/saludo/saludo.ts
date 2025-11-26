import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-saludo',
  imports: [FormsModule,CommonModule],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css'
})
export class Saludo {
nombre: string = ''; 
  mensaje: string = ''; 
 
  saludar() { 
    this.mensaje = "¡Hola " + this.nombre + "! Bienvenido a Angular"; 
  }
}
