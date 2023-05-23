import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles-for-ej1',
  templateUrl: './bucles-for-ej1.component.html',
  styleUrls: ['./bucles-for-ej1.component.css']
})
export class BuclesForEj1Component {
  
  numero: number = 0
  
  resultado: string =""

  mostrarResultado(): void{

    for (let i = 1; i <= this.numero; i++) {
      
      this.resultado = this.resultado + `${i} , `    
      
    }
  }

}
