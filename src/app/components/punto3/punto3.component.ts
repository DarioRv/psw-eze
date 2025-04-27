import { Component } from '@angular/core';

@Component({
  selector: 'app-punto3',
  imports: [],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css',
})
export class Punto3Component {
  categorias = ['Animales', 'Jugadores', 'Actores', 'Colores'];
  palabrasPorCategoria = [
    {
      categoria: 'Animales',
      palabras: ['Perro', 'Gato', 'Elefante', 'Leon', 'Tigre'],
    },
    {
      categoria: 'Jugadores',
      palabras: ['Messi', 'Cristiano', 'Neymar', 'Mbappe', 'Pele'],
    },
    {
      categoria: 'Actores',
      palabras: ['Brad Pitt', 'Leonardo DiCaprio', 'Tom Cruise'],
    },
    {
      categoria: 'Colores',
      palabras: ['Rojo', 'Verde', 'Azul', 'Amarillo'],
    },
  ];

  palabrasSeleccionadas: string[] = [];
  intentosRestantes = 5;
  palabraAdivinar: string = '';
  categoriaSeleccionada: string = '';
  palabraOculta: string[] = [];
  gano = false;

  letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  seleccionarLetra(letra: string) {
    if (this.palabraAdivinar.toUpperCase().includes(letra)) {
      // let indiceLetra = this.palabraAdivinar.toUpperCase().indexOf(letra);
      // this.palabraOculta[indiceLetra] = letra;
      this.palabraAdivinar
        .toUpperCase()
        .split('')
        .forEach((letraPalabra, index) => {
          if (letraPalabra == letra) {
            this.palabraOculta[index] = letra;
          }
        });
    } else {
      this.intentosRestantes -= 1;
    }
    let completada = !this.checkPalabraAdivinada();
    if (completada) {
      this.gano = true;
    }
  }

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.palabrasSeleccionadas =
      this.palabrasPorCategoria.find((obj) => obj.categoria === categoria)
        ?.palabras ?? [];

    const randomIndex = Math.floor(
      Math.random() * this.palabrasSeleccionadas.length
    );
    this.palabraAdivinar = this.palabrasSeleccionadas[randomIndex];
    this.palabraOculta = this.palabraAdivinar.split('').map((letra) => '_');
  }

  // true si falta letras a adivinar
  // false es que la palabra esta adivinada
  checkPalabraAdivinada() {
    return this.palabraOculta.includes('_');
  }

  reiniciar() {
    this.categoriaSeleccionada = '';
    this.palabraAdivinar = '';
    this.palabraOculta = [];
    this.intentosRestantes = 5;
    this.gano = false;
  }
}
