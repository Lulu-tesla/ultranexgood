import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto-home',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './contacto-home.html',
  styleUrl: './contacto-home.css'
})
export class ContactoHome {
  // Aquí podrías añadir lógica para enviar el formulario con un servicio
}
