import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {

  emailInput: string = '';
  enviado: boolean = false;
  enviando: boolean = false;

  async suscribirse() {
    if (!this.emailInput || !this.emailInput.includes('@')) return;

    this.enviando = true;

    try {
      await emailjs.send(
        'service_r5eml2g',
        'template_leeikug',
        {
          email: this.emailInput,
          name: 'Suscriptor Web',
          message: 'Nueva suscripción desde ultranexcargo.com',
          time: new Date().toLocaleString()
        },
        'qR7Gpgaz5xKIZBYn5'
      );
      this.enviado = true;
      this.emailInput = '';
    } catch (error) {
      console.error('Error al suscribirse:', error);
    } finally {
      this.enviando = false;
    }
  }
}
