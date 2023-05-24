import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles-for-ej5',
  templateUrl: './bucles-for-ej5.component.html',
  styleUrls: ['./bucles-for-ej5.component.css']
})
export class BuclesForEj5Component {

  numero: number = 0
  resultado: number = 1  //Acumulador //Le inicializo a 1 porque si le inicializo a 0, en la operación de la linea 17, me daría siempre cero (cualquier número multiplicado por cero, es cero)

  calcularFactorial(): void{

    this.resultado = 1      //Tengo que inicializar el atributo aquí dentro del método porque sino el segundo resultado se me va sumando al primero y el tercero al segundo y así. Poniendo esta linea lo que hace es hace el primer resultado, luego el segundo es completamente otro resultado completamente nuevo, y así.

    for (let i = 1; i <= this.numero; i++) {

      this.resultado = this.resultado * i      
    }
  }

}
