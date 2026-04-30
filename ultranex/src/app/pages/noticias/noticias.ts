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
      titulo: 'No hay salidas de buses desde Cochabamba hacia Santa Cruz por bloqueo y derrumbe en las rutas',
      resumen: 'Informamos a nuestros clientes que debido a factores externos en las rutas troncales, el tiempo de entrega podría verse afectado. Mantenemos monitoreo 24/7 para garantizar la seguridad de sus envíos.',
      categoria: 'Nacionales',
      ubicacion: 'Santa Cruz-Cochabanba',
      fecha: '25 ABR 2026',
      imagen: 'assets/images/Noticias/Stcruz.png',

    },
    {
      id: 2,
      titulo: 'Intensa lluvia en Tarija deja intransitable varios caminos',
      resumen: 'Debido al aluvión en carreteras de Tarija, algunos envíos pueden presentar retrasos.Estamos aplicando rutas alternas y priorizando entregas urgentes para reducir el impacto Gracias por tu comprensión',
      categoria: 'Locales',
      ubicacion: 'Tarija',
      fecha: '22 ABR 2026',
      imagen: 'assets/images/Noticias/Tarija.png'
    },
    {
      id: 3,
      titulo: 'Comunarios guaraníes cortan la ruta Santa Cruz–Yacuiba y exigen nuevo ejecutivo',
      resumen: 'Ultranex Cargo informa que, debido al bloqueo en la ruta Santa Cruz – Yacuiba a la altura de Gutiérrez, se están registrando demoras en los envíos que transitan por este corredor; la empresa ha activado medidas de contingencia y monitoreo constante, recomendando a sus clientes prever posibles retrasos mientras se normaliza la circulación.',
      categoria: 'Regionales',
      ubicacion: 'Santa Cruz – Yacuiba',
      fecha: '18 ABR 2026',
      imagen: 'assets/images/Noticias/Bloqueo3.png '
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
