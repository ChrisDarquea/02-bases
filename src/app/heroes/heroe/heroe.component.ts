import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name: string = 'iron Man';
  public age:  number = 45;

  // Propiedad de la clase por medio del uso de un get 
  // El get es una propiedad y los métodos se invocan con ()
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Propiedad donde hacemos una Concatenación de Variables
  getheroDescription(): string {
    return `${ this.name } -${ this.age }`;
  }

  // Creación de dos métodos que no hacen nada
  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
