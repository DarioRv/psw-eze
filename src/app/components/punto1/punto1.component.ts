import { Component } from '@angular/core';

@Component({
  selector: 'psw-punto1',
  imports: [],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css',
})
export class Punto1Component {
  noticias = [
    {
      titulo:
        'Suspenden el ingreso a Chile por el Paso de Jama debido al mal tiempo',
      img: 'https://media.todojujuy.com/p/8db69b1aa2b15d3a89fd56e26536f5b9/adjuntos/227/imagenes/003/398/0003398390/375x211/smart/imagepng.png',
      texto:
        'Este lunes, la Dirección de Tránsito y Seguridad Vial de la Policía de la provincia de Jujuy informó la suspensión temporal del ingreso a Chile a través del Paso Fronterizo de Jama, debido a condiciones meteorológicas adversas en la Ruta CH-27 del lado chileno.',
    },
    {
      titulo: 'EN VIVO: minuto a minuto de la muerte del Papa Francisco',
      img: 'https://media.todojujuy.com/p/3103cf708b267bc153b008351a74cbb5/adjuntos/227/imagenes/003/398/0003398331/790x0/smart/el-papa-francisco.jpg',
      texto:
        'El Papa Francisco murió este lunes a las 7:35 horas (5:35 GMT) en su residencia de la Casa Santa Marta, en el Vaticano, informó el camarlengo del Vaticano, el cardenal Kevin Joseph Farrell, en un emotivo mensaje grabado. El pontífice argentino, de 88 años, había estado convaleciente tras sufrir neumonía y otras complicaciones graves de salud durante los últimos meses.',
    },
    {
      titulo: 'La Libertad Avanza escucha a los vecinos de Alto Comedero',
      img: 'https://media.todojujuy.com/p/7f9e411083a7dbec79ecf17839f7e04d/adjuntos/227/imagenes/003/398/0003398397/790x0/smart/la-libertad-avanza.jpeg',
      texto:
        'Con la presencia del senador nacional Ezequiel Atauche, los candidatos de La Libertad Avanza Jujuy recorrieron el barrio Alto Comedero de San Salvador de Jujuy, en una jornada de diálogo directo con los vecinos. La actividad tuvo como objetivo principal recoger inquietudes y propuestas de quienes viven y trabajan en uno de los sectores más poblados de la capital jujeña.',
    },
    {
      titulo:
        'Javier Milei viajará a Roma para participar del funeral del Papa Francisco',
      img: 'https://media.todojujuy.com/p/d6e39b07ec085a65f33843e00a974eb4/adjuntos/227/imagenes/003/398/0003398276/790x0/smart/papa-francisco-javier-mileijpg.jpg',
      texto:
        'El presidente de la Nación, Javier Milei, viajará a Roma para participar de los actos fúnebres del Papa Francisco. Según medios nacionales la partida del mandatario hacia la capital italiana se realizará cuando el Vaticano confirme las fechas de las ceremonias para la despedida final del sumo pontífice.',
    },
  ];
}
