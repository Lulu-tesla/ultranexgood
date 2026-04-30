import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../sections/navbar/navbar';
import { ContactoHome } from '../../sections/contacto-home/contacto-home';
import { Footer } from '../../sections/footer/footer';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, Navbar, ContactoHome, Footer],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  faqs = [
    {
      pregunta: '¿Tiempos de entrega?',
      respuesta: 'Servicio expres de 4hrs a 6hrs y Servicio estándar de 12hrs a 24hrs.',
      icono: 'fa-solid fa-bolt-lightning',
      abierta: false
    },
    {
      pregunta: '¿Carga pesada?',
      respuesta: 'Peso Maximo de 15kg peso neto-.',
      icono: 'fa-solid fa-weight-hanging',
      abierta: false
    },
    {
      pregunta: '¿Rastreo online?',
      respuesta: 'Sistema GPS activo 24/7 con su código de guía. (EN PROCESO DE IMPLEMENTACIÓN).',
      icono: 'fa-solid fa-location-dot',
      abierta: false
    },
    {
      pregunta: '¿Cobertura Nacional?',
      respuesta: 'Red completa en todo el departamento y fronteras, A Una sola llamada de cada ciudad.',
      icono: 'fa-solid fa-map',
      abierta: false
    },
    {
      pregunta: '¿Seguro de envío?',
      respuesta: 'Protección total contra imprevistos y siniestros.',
      icono: 'fa-solid fa-check-circle', // Verifica el nombre exacto según tu versión de FontAwesome
      abierta: false
    },
    {
      pregunta: '¿Horarios de sucursal?',
      respuesta: 'Lun-Vie: 08:30-12:30 14:00-17:00  | Sáb: 09:00-13:00.',
      icono: 'fa-solid fa-calendar-days',
      abierta: false
    },
    {
      pregunta: '¿Recojo a domicilio?',
      respuesta: 'Programación inmediata para clientes corporativos.',
      icono: 'fa-solid fa-truck-ramp-box',
      abierta: false
    },
    {
      pregunta: '¿Envíos corporativos?',
      respuesta: 'Tarifas preferenciales y facturación directa.',
      icono: 'fa-solid fa-briefcase',
      abierta: false
    },
    {
      pregunta: '¿Soporte técnico?',
      respuesta: 'Soporte especializado vía chat o presencial.',
      icono: 'fa-solid fa-headset',
      abierta: false
    }
  ];

  toggleFaq(selected: any) {
    this.faqs.forEach(f => {
      if (f !== selected) f.abierta = false;
    });
    selected.abierta = !selected.abierta;
  }
}
