import { Component } from '@angular/core';

interface Noticia {
  titulo: string;
  imagen: string; /*URL*/
  texto: string;
  fecha: Date;
}

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  noticias: Noticia[] = [
    {
      titulo: 'Noticia 1',
      imagen: 'https://github.com/mdelaosa/FS_Maquetacion/blob/main/SOURCES/movil.png',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fecha: new Date('2026-07-07'),
    },
    {
      titulo: 'Noticia 2',
      imagen: 'https://github.com/mdelaosa/FS_Maquetacion/blob/main/SOURCES/movil%20de%20lado.png',
      texto: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: new Date('2026-07-07'),
    }
  ];
}
