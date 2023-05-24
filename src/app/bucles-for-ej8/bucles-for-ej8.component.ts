import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles-for-ej8',
  templateUrl: './bucles-for-ej8.component.html',
  styleUrls: ['./bucles-for-ej8.component.css']
})
export class BuclesForEj8Component {

  edades: number = 0
  estaturas: number = 0
  introEdades: string | null =""      //Prompt edades
  introEstaturas: string | null =""   //Prompt estaturas
  edadMedia: number = 0               //Acumulador de edades
  estaturaMedia: number = 0           //Acumulador de estatura
  contadorEdadMas: number = 0         //Cantidad de edades superiores a 18
  contadorEstaturaMas: number = 0     //Cantidad de estaturas superiores a 175 cm

  operar(): void{

    this.edadMedia = 0
    this.estaturaMedia = 0

    for (let i = 1; i <= 5; i++) {

      //EDADES
      this.introEdades = prompt("Introduce las EDADES de los alumnos:")

      if (this.introEdades != null) {

        this.edades = parseInt(this.introEdades)

        this.edadMedia = (this.edadMedia + this.edades) / 5

        if (this.edades > 18) {

          this.contadorEdadMas ++
        }
        
      }
      else {
         this.edades = 0
      }


      //ESTATURAS
      this.introEstaturas = prompt("Introduce las ESTATURAS de los alumnos:")

      if (this.introEstaturas != null) {

        this.estaturas = parseInt(this.introEstaturas)

        this.estaturaMedia = (this.estaturaMedia + this.estaturas) / 5

        if (this.estaturas > 175) {

          this.contadorEstaturaMas ++
          
        }
        
      }
      else {

        this.estaturas = 0
      }


      console.log(`La media de las EDADES introducidas es: ${this.edadMedia}`)
      console.log(`La cantidad de EDADES mayores de 18 años es: ${this.contadorEdadMas}`)

      console.log(`La media de las ESTATURAS introducidas es: ${this.estaturaMedia}`)
      console.log(`La cantidad de ESTATURAS mayores de 175 cm es: ${this.contadorEstaturaMas}`)
      
    }
  }


}
