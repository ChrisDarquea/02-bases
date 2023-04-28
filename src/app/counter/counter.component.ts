// Creación de la clase de CounterComponent

import { Component } from "@angular/core";

// Para convertir a la clase en un componente usamos la expresión @Component
@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click) = "increaseBy(+1)"> +1 </button>
        <button (click) = "resetCounter()"> Reset </button>
        <button (click) = "increaseBy(-1)"> -1 </button>
    `
})
export class CounterComponent {
    
    public counter: number = 10;

    // Creación del Método Dentro de la Clase Botón para restar o sumar
    increaseBy (value: number): void {
        this.counter += 1;
    }

     // Botón para restablecer el counter
    resetCounter () {
        this.counter = 10;
    }
}