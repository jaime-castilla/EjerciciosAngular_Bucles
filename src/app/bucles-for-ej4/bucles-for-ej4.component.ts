import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles-for-ej4',
  templateUrl: './bucles-for-ej4.component.html',
  styleUrls: ['./bucles-for-ej4.component.css']
})
export class BuclesForEj4Component {

  resultado: number = 1   //Acumulador //Le tengo que inicializar en 1 porque si le inicializo a 0, luego en la operación de la linea 18, siempre me va a dar cero, porque cualquier número por cero es igual a cero.

  calcularProducto(): void{

    for (let i = 0; i <= 20; i++) {    // Pongo 20 porque en los 20 primeros números hay 10 números impares y 10 pares.

      if (i % 2 == 1) {

        this.resultado = this.resultado * i
        
      }
    }

    console.log(`El producto de los diez primeros números impares es: ${this.resultado}`)
  }

}
