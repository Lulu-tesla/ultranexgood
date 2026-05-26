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
      titulo: '18 puntos de bloqueo afectan rutas hacia el Altiplano, Yungas y fronteras en La Paz',
      resumen: 'Nuestras rutas hacia el Altiplano, Yungas y fronteras están severamente restringidas. Los tiempos de tránsito desde y hacia La Paz presentan demoras considerables. Nuestro equipo de operaciones sigue buscando vías alternas para garantizar la entrega de su carga.',
      categoria: 'Nacionales',
      ubicacion: 'La Paz',
      fecha: '25 MAY 2026',
      imagen: 'assets/images/Noticias/lapaz.jpg'
    },
    {
      id: 2,
      titulo: 'Eje troncal La Paz–Cochabamba interrumpido: 16 puntos de bloqueo registrados en Oruro',
      resumen: 'Fuerte afectación en el eje troncal que conecta La Paz con Cochabamba. Nuestro equipo de Carga Nacional está monitoreando la situación hora a hora para mantener la mayor fluidez posible en los envíos que transitan por este departamento.',
      categoria: 'Nacionales',
      ubicacion: 'Oruro',
      fecha: '25 MAY 2026',
      imagen: 'assets/images/Noticias/oruro.jpg'
    },
    {
      id: 3,
      titulo: 'Cochabamba registra 12 puntos de bloqueo con impacto directo en la conexión oriente-occidente',
      resumen: 'El centro del país sufre interrupciones que afectan la conexión entre el oriente y occidente de Bolivia. Los envíos con origen o destino en Cochabamba podrían presentar extensiones en sus tiempos de entrega. Agradecemos su comprensión ante esta situación de carácter nacional.',
      categoria: 'Nacionales',
      ubicacion: 'Cochabamba',
      fecha: '25 MAY 2026',
      imagen: 'assets/images/Noticias/cochabamba.jpg'
    },
    {
      id: 4,
      titulo: 'Rutas de conexión al sur del país interrumpidas: 8 puntos de bloqueo en Potosí',
      resumen: 'Las rutas de conexión hacia el sur del país presentan interrupciones activas en Potosí. Recomendamos a nuestros clientes planificar sus envíos con anticipación y consultar con nuestros agentes la disponibilidad y los tiempos estimados de entrega antes de despachar su carga.',
      categoria: 'Regionales',
      ubicacion: 'Potosí',
      fecha: '25 MAY 2026',
      imagen: 'assets/images/Noticias/potosi.png'
    },
    {
      id: 5,
      titulo: 'Alta saturación de carga en Santa Cruz ante restricciones hacia el occidente del país',
      resumen: 'Debido a la situación de bloqueos a nivel nacional, nuestra sucursal central en Santa Cruz presenta alta saturación de carga con destino al occidente boliviano. Estamos priorizando el despacho de envíos de primera necesidad, como medicamentos y alimentos perecederos, para garantizar su llegada oportuna.',
      categoria: 'Regionales',
      ubicacion: 'Santa Cruz',
      fecha: '25 MAY 2026',
      imagen: 'assets/images/Noticias/santacruz.jpg'
    },
    {
      id: 6,
      titulo: 'Chuquisaca opera con afectaciones menores: 1 punto de bloqueo activo en la región',
      resumen: 'Las rutas en Chuquisaca operan con precaución ante un punto de bloqueo activo en la región. Ultranex Cargo mantiene el flujo logístico activo con afectaciones menores, garantizando la continuidad del servicio para nuestros clientes con origen o destino en Sucre y sus alrededores.',
      categoria: 'Locales',
      ubicacion: 'Chuquisaca',
      fecha: '25 MAY 2026',
      imagen: 'assets/images/Noticias/chuquisaca.jpg'
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
