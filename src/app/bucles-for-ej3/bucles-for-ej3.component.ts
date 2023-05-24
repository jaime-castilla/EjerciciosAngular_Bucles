import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles-for-ej3',
  templateUrl: './bucles-for-ej3.component.html',
  styleUrls: ['./bucles-for-ej3.component.css']
})
export class BuclesForEj3Component {

  numero: number = 0
  suma: number = 0                     //Acumulador de los números.
  introNumero: string | null =""       //Prompt (Es de tipo String o nulo porque lo dice la documentación del Prompt)

  hacerSuma(): void{

    for (let i = 1; i <= 5; i++) {
      
      this.introNumero = prompt("Introduce los números:")

    if (this.introNumero != null) {

      this.numero = parseInt(this.introNumero)  //This.numero es el número que voy metiendo en el Prompt, y como lo meto en el atributo introNumero(es el Prompt) que es String o nulo, pues el introNumero lo tengo que convertir a entero, porque el número que meto(this.numero) es de tipo entero y en la siguiente linea, en la que hace la suma, todos los atributos tienen que ser de tipo entero.

      this.suma = this.suma + this.numero         
    }
    else {

      this.numero = 0
    }

    }

    console.log(`La suma de los cinco números introducidos es: ${this.suma}`)
  }

}
