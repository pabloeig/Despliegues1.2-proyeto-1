import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from './producto';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
  productos: Producto[] = [];
  productoComprado: string = '';

  constructor() {
    this.inicializarProductos();
  }

  inicializarProductos(): void {
    this.productos = [
      new Producto(
        'Calabaza Decorativa',
        'https://images.unsplash.com/photo-1508533831623-7d37913cc5c0?w=400',
        15.99,
        true,
        'Calabaza tallada con luz LED interior'
      ),
      new Producto(
        'Disfraz de Bruja',
        'https://images.unsplash.com/photo-1603230050890-c9028d90a8f7?w=400',
        45.50,
        true,
        'Disfraz completo con sombrero y capa'
      ),
      new Producto(
        'Guirnalda de Murciélagos',
        'https://images.unsplash.com/photo-1570383673611-b97f9ac8a69c?w=400',
        12.99,
        false,
        'Decoración de murciélagos negros para colgar'
      ),
      new Producto(
        'Calavera Iluminada',
        'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400',
        22.00,
        true,
        'Calavera decorativa con ojos luminosos'
      ),
      new Producto(
        'Velas Negras',
        'https://images.unsplash.com/photo-1602874801006-93c6fb1d3c1e?w=400',
        8.99,
        true,
        'Set de 6 velas negras aromáticas'
      ),
      new Producto(
        'Telaraña Gigante',
        'https://images.unsplash.com/photo-1635516850927-d7ba5c4b8d64?w=400',
        18.50,
        false,
        'Telaraña elástica de 3 metros con arañas'
      ),
      new Producto(
        'Máscara de Fantasma',
        'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?w=400',
        14.99,
        true,
        'Máscara terrorífica con efectos especiales'
      ),
      new Producto(
        'Dulces de Halloween',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
        9.99,
        true,
        'Bolsa de caramelos temáticos variados'
      )
    ];
  }

  comprarProducto(producto: Producto): void {
    this.productoComprado = `¡Has comprado: ${producto.getNombre()}! Precio: €${producto.getPrecio().toFixed(2)}`;
    
    // También mostrar alert
    alert(this.productoComprado);
    
    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      this.productoComprado = '';
    }, 5000);
  }
}