import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../sections/navbar/navbar';
import { Footer } from '../../sections/footer/footer';

export interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  categoria: string;
  ubicacion: string;
  fecha: string;
  imagen: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class Noticias {
  categorias: string[] = ['Todas', 'Nacionales', 'Regionales', 'Locales', 'Provinciales'];
  categoriaSeleccionada: string = 'Todas';

  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'CARGA CON DEMORA EN LAS ENTREGAS POR BLOQUEOS',
      resumen: 'Informamos a nuestros clientes que debido a factores externos en las rutas troncales, el tiempo de entrega podría verse afectado. Mantenemos monitoreo 24/7 para garantizar la seguridad de sus envíos.',
      categoria: 'Nacionales',
      ubicacion: 'Santa Cruz',
      fecha: '25 ABR 2026',
      imagen: 'assets/images/noticias/bloqueo-rutas.jpg'
    },
    {
      id: 2,
      titulo: 'NUEVA FLOTA DE TRANSPORTE DE ALTO TONELAJE',
      resumen: 'Ultranex refuerza su capacidad operativa con la adquisición de 10 unidades especializadas para rutas internacionales, optimizando el transporte de maquinaria industrial.',
      categoria: 'Locales',
      ubicacion: 'Tarija',
      fecha: '22 ABR 2026',
      imagen: 'assets/images/noticias/flota-camiones.jpg'
    },
    {
      id: 3,
      titulo: 'APERTURA DE NODO LOGÍSTICO ESTRATÉGICO',
      resumen: 'Inauguramos nuestro nuevo centro de control operativo, diseñado para agilizar la distribución y recepción de paquetería en el occidente del país con tecnología láser.',
      categoria: 'Regionales',
      ubicacion: 'La Paz',
      fecha: '18 ABR 2026',
      imagen: 'assets/images/noticias/almacen-logistico.jpg'
    }
  ];

  get noticiasFiltradas(): Noticia[] {
    if (this.categoriaSeleccionada === 'Todas') {
      return this.noticias;
    }
    return this.noticias.filter(n => n.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(cat: string): void {
    this.categoriaSeleccionada = cat;
  }
}
