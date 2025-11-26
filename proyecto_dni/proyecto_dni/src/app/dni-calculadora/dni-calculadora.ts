import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dni-calculadora',
  standalone: true,
  templateUrl: './dni-calculadora.html',
  styleUrls: ['./dni-calculadora.css']
})
export class DniCalculadora {
  letras: string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  dniNumber = signal<number | null>(null);
  dniLetter = signal<string>('');
  message = signal<string>('');

  calcularLetra(dni: number): string {
    return this.letras[dni % 23];
  }

  validarDni(): void {
    const dni = this.dniNumber();
    const letraUsuario = this.dniLetter().toUpperCase();

    if (dni === null || dni < 0 || dni > 99999999) {
      this.message.set('El número proporcionado no es válido.');
      return;
    }

    const letraCalculada = this.calcularLetra(dni);

    if (letraCalculada !== letraUsuario) {
      this.message.set('La letra indicada no es correcta.');
    } else {
      this.message.set('El número y la letra de DNI son correctos.');
    }
  }
}
