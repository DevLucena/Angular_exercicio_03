import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valorInicial: number = 0 //variavel numerica cujo o valor inicial será 0

constructor() {}
   
    soma() { //função que irá acrescentar 1 a variavel valorInicial
      this.valorInicial++;
    }

    diminui() { //função que irá retirar 1 da variavel valorInicial
      this.valorInicial--;
    }
}
