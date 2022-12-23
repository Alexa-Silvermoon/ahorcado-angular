import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
/*
@Component es lo que se conoce como un decorador y lo que esta adentro conectara a app.component.html
*/
export class AppComponent {

  palabra = 'PANDEBONO';
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {

    this.palabraOculta = '_ '.repeat( this.palabra.length );
    //.repeat es un metodo que repite el guion _ acorde a la longitud de la variable palabra, en este caso
    // this.palabra.length es el argumento del metodo .repeat
    // console.log('esta en una prueba desde app.componen.ts a la consola de chrome');
  }

  comprobar( letra: string ) {
    // console.log('letra: ' + letra);
    //esa letra es traida desde app.component.html <button (click)="comprobar( letra )" *ngFor="let letra of letras" class="btn btn-primary">
    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');
    // .split permite separar una palabra y convertirla en un arreglo
    // console.log(palabraOcultaArr);

    for ( let i = 0; i < this.palabra.length; i ++ ) {

      if ( this.palabra[i] === letra ) {
        palabraOcultaArr[i] = letra;
      }

    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    //.join une lo que separo .split y lo depositamos en palabraOculta
    this.verificaGane();

  }

  verificaGane() {
    // console.log(this.palabraOculta);

    const palabraArr = this.palabraOculta.split(' ');
    // console.log(palabraArr);
    const palabraEvaluar = palabraArr.join('');
    // console.log(palabraEvaluar);

    if ( palabraEvaluar === this.palabra ) {
      this.gano = true;
      console.log('Usuario GANO');
    }

    if ( this.intentos >= 9 ) { // si cantidad de intentos llega a 9, entonces usuario pierde y el boleano se vuelve true
      this.perdio = true;
      console.log('Usuario perdio');
      // <h3>Intentos <small> {{ intentos }} / 9</small> </h3>
    }

  }

  existeLetra( letra: string ) {

    if ( this.palabra.indexOf( letra ) >= 0  ) { //si esto es mayor o igual a 0, significa que si encontro la letra
      // console.log('Letra existe ' + letra );
    } else {
      // console.log('Letra NO existe ' + letra );
      this.intentos ++;
      // si la letra no existe en la palabra, entonces el numero de intentos va en aumento
    }

  }

}
console.log('Made By: Christian Alexander Martinez Millan');
