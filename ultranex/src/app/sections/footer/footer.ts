import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Esto es obligatorio para que routerLink funcione

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- Añádelo a los imports
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  // Lógica del footer (si tuvieras alguna)
}
