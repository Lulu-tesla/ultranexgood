import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer } from '../../sections/footer/footer';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './sucursales.html',
  styleUrl: './sucursales.css'
})
export class Sucursales {
  private sanitizer = inject(DomSanitizer);

  sucursales = [
    {
      id: 'SCZ01',
      ciudad: 'Santa Cruz',
      tipo: 'Sucursal Principal',
      direccion: 'Calle Pedro Vélez 195',
      telefono: '+591 79047111',
      img: 'assets/images/sucursales/scz1.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-17.78697389,-63.19056944&z=17&output=embed',
      mapLink: 'https://maps.google.com/?q=-17.78697389,-63.19056944'
    },
    {
      id: 'LPZ02',
      ciudad: 'La Paz',
      tipo: 'Sucursal',
      direccion: 'Calle Ingavi 721, Edif. Villmag',
      telefono: '+591 72234520',
      img: 'assets/images/sucursales/lapaz.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-16.4957,-68.1336&z=17&output=embed',
      mapLink: 'https://goo.gl/maps/VYDUoUXHWKL38mgp7'
    },
    {
      id: 'CBB03',
      ciudad: 'Cochabamba',
      tipo: 'Sucursal',
      direccion: 'Calle Hamiraya #340',
      telefono: '+591 71700386',
      img: 'assets/images/sucursales/cochabamba1.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-17.3954627,-66.1606274&z=17&output=embed',
      mapLink: 'https://maps.google.com/?q=-17.3954627,-66.1606274'
    },
    {
      id: 'TRJ04',
      ciudad: 'Tarija',
      tipo: 'Sucursal',
      direccion: 'Calle Daniel Campos y Cochabamba',
      telefono: '+591 78220776',
      img: 'assets/images/sucursales/tarija.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-21.5282568,-64.730978&z=17&output=embed',
      mapLink: 'https://maps.google.com/?q=-21.5282568,-64.730978'
    },
    {
      id: 'TDD05',
      ciudad: 'Trinidad',
      tipo: 'Sucursal',
      direccion: 'Rómulo Mendoza entre Fabián Monasterio y Hnos Rioja Aponte #135',
      telefono: '+591 72841994 / 71144403',
      img: 'assets/images/sucursales/beni.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-14.8348291,-64.898144&z=17&output=embed',
      mapLink: 'https://maps.google.com/?q=-14.8348291,-64.898144'
    },
    {
      id: 'RIB06',
      ciudad: 'Riberalta',
      tipo: 'Sucursal',
      direccion: 'Barrio San Antonio, calle Sucre y Oruro (esquina)',
      telefono: '+591 75196921',
      img: 'assets/images/sucursales/pando.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-11.005345,-66.0766748&z=17&output=embed',
      mapLink: 'https://maps.google.com/?q=-11.005345,-66.0766748'
    },
    {
      id: 'PTS07',
      ciudad: 'Potosí',
      tipo: 'Sucursal',
      direccion: 'Calle Hoyos 216, Zona San Martín',
      telefono: '+591 78636188 / 73890436',
      img: 'assets/images/sucursales/potosi.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-19.5892977,-65.7452163&z=17&output=embed',
      mapLink: 'https://maps.google.com/?q=-19.5892977,-65.7452163'
    },
    {
      id: 'ORU08',
      ciudad: 'Oruro',
      tipo: 'Sucursal',
      direccion: 'Calle La Plata casi Av. España',
      telefono: '+591 68284008 / 69583645',
      img: 'assets/images/sucursales/oruro1.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-17.9816358,-67.1183961&z=17&output=embed',
      mapLink: 'https://maps.google.com/?q=-17.9816358,-67.1183961'
    },
    {
      id: 'SCR09',
      ciudad: 'Sucre',
      tipo: 'Sucursal',
      direccion: 'Calle Santísima Trinidad N° 1',
      telefono: '+591 73466826',
      img: 'assets/images/sucursales/chuquisaca.png',
      mapaEmbed: 'https://maps.google.com/maps?q=-19.0436,-65.2592&z=17&output=embed',
      mapLink: 'https://maps.app.goo.gl/2JTX2Pfr9sFEYsck8'
    }
  ];

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  abrirMapa(url: string): void {
    window.open(url, '_blank');
  }
}
