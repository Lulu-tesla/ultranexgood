import { Component } from '@angular/core';
import { ContactoHome } from '../../sections/contacto-home/contacto-home';

@Component({
  selector: 'page-contacto',
  standalone: true,
  imports: [ContactoHome,],
  template: `
    <div class="contact-page">
      <div class="container text-center">
        <h1>Ponte en contacto con Ultranex</h1>
        <p>Atención al cliente 24/7 para rastreo y consultas corporativas.</p>
      </div>
      <app-contacto-home></app-contacto-home>
  `,
  styles: [`
    .contact-page { padding: 120px 0 50px; }
    .map-placeholder {
      height: 400px; background: #111; margin-top: 50px;
      display: flex; align-items: center; justify-content: center;
      border-top: 1px solid var(--accent-color);
    }
  `]
})
export class Contacto {}
