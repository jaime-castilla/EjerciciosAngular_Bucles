import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles-for-ej7',
  templateUrl: './bucles-for-ej7.component.html',
  styleUrls: ['./bucles-for-ej7.component.css']
})
export class BuclesForEj7Component {

  sueldos: number = 0                //Sueldos introducidos
  introSueldos: string | null =""    //Prompt
  sumaSueldos: number = 0            //Acumulador de sueldos
  contadorMil: number = 0            //Contador de los sueldos mayores de 1000

  operarSueldos(): void{

    for (let i = 1; i <= 5; i++) {

      this.introSueldos = prompt("Introduce los sueldos:")

      if (this.introSueldos != null) {

        this.sueldos = parseInt(this.introSueldos)

        this.sumaSueldos = this.sumaSueldos + this.sueldos

        if (this.sueldos > 1000) {

          this.contadorMil ++
          
        }
      }
      else {
        this.sueldos = 0
      }

      console.log(`La suma de los sueldos introducidos es: ${this.sumaSueldos}`)
      console.log(`La cantidad de sueldos superiores a 1000€ es: ${this.contadorMil}`)
      
    }
  }

}
