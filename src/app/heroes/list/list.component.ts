import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Arreglo de string para el uso del *ngfor
  public heroNames: string [] = ['Spideman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string; 

  // Crear método que remueva el LastHero 
  // Vamos a usar un método llamado "pop" = remueve el último elemento de un arreglo y lo regresa.
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
