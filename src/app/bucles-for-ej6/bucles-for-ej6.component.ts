import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles-for-ej6',
  templateUrl: './bucles-for-ej6.component.html',
  styleUrls: ['./bucles-for-ej6.component.css']
})
export class BuclesForEj6Component {

  numeros: number = 0                //Numeros que se meten en el Prompt
  introNumeros: string | null =""    //Prompt
  sumaPositivos: number = 0          //Acumulador de los números positivos
  sumaNegativos: number = 0          //Acumulador de los números negativos
  contadorPos: number = 0            //Cuenta cuantos números positivos hay
  contadorNeg: number = 0            //Cuenta cuantos números negativos hay
  contadorCeros: number = 0          //Cuenta cuantos ceros hay

  operar(): void{
     for (let i = 1; i <= 5; i++) {

      this.introNumeros = prompt("Introduce los números:")

      if (this.introNumeros != null) {

        this.numeros = parseInt(this.introNumeros)

        if (this.numeros > 0) {
  
          this.contadorPos ++
  
          this.sumaPositivos = this.sumaPositivos + this.numeros
  
          this.sumaPositivos = this.sumaPositivos / this.contadorPos
        }
        else if (this.numeros < 0) {

          this.contadorNeg ++

          this.sumaNegativos = this.sumaNegativos + this.numeros

          this.sumaNegativos = this.sumaNegativos / this.contadorNeg
        }
        else if (this.numeros == 0) {

          this.contadorCeros ++
        }
        
      }
      else {
        this.numeros = 0
      }

      console.log(`La media de los números POSITIVOS introducidos es: ${this.sumaPositivos}`)
      console.log(`La media de los números NEGATIVOS introducidos es: ${this.sumaNegativos}`)
      console.log(`La cantidad de ceros introducidos es: ${this.contadorCeros}`)
      
     }
  }

}
