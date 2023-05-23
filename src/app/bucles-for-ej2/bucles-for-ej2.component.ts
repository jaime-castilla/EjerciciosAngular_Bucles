import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles-for-ej2',
  templateUrl: './bucles-for-ej2.component.html',
  styleUrls: ['./bucles-for-ej2.component.css']
})
export class BuclesForEj2Component {

  resultado: string =""

  mostrarResultado(): void{

    for (let i = 100; i >= 0; i-=7) {
      
      this.resultado = this.resultado + `${i} , `   
      
    }
  }

}
