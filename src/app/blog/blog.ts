import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Noticia {
  titulo: string;
  imagen: string; /*URL*/
  texto: string;
  fecha: Date;
}

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  noticias: Noticia[] = [
    {
      titulo: 'Noticia 1',
      imagen: 'https://github.com/mdelaosa/FS_Maquetacion/blob/main/SOURCES/movil.png?raw=true',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fecha: new Date('2026-07-07'),
    },
    {
      titulo: 'Noticia 2',
      imagen: 'https://github.com/mdelaosa/FS_Maquetacion/blob/main/SOURCES/movil%20de%20lado.png?raw=true',
      texto: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: new Date('2026-07-07'),
    }
  ];

  newTitulo: string = '';
  newImagen: string = '';
  newTexto: string = '';
  newFecha: Date = new Date();

  addNoticia():void {
    if (!this.newTitulo || !this.newImagen || !this.newTexto) {
      return;
    }
    
    const nuevaNoticia: Noticia = {
      titulo: this.newTitulo,
      imagen: this.newImagen,
      texto: this.newTexto,
      fecha: this.newFecha,
    };

    this.noticias.push(nuevaNoticia);

    this.newTitulo = '';
    this.newImagen = '';
    this.newTexto = '';
    this.newFecha = new Date();
  }
}
