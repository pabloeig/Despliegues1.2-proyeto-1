export class Producto {
  private nombre: string;
  private imagen: string;
  private precio: number;
  private disponible: boolean;
  private descripcion: string;

  constructor(
    nombre: string,
    imagen: string,
    precio: number,
    disponible: boolean,
    descripcion: string
  ) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.disponible = disponible;
    this.descripcion = descripcion;
  }

  // Getters
  getNombre(): string {
    return this.nombre;
  }

  getImagen(): string {
    return this.imagen;
  }

  getPrecio(): number {
    return this.precio;
  }

  getDisponible(): boolean {
    return this.disponible;
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  // Setters
  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setImagen(imagen: string): void {
    this.imagen = imagen;
  }

  setPrecio(precio: number): void {
    this.precio = precio;
  }

  setDisponible(disponible: boolean): void {
    this.disponible = disponible;
  }

  setDescripcion(descripcion: string): void {
    this.descripcion = descripcion;
  }
}