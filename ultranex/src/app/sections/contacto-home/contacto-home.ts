import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto-home.html',
  styleUrl: './contacto-home.css'
})
export class ContactoHome {

  sedes = [
    {
      id: 'scz',
      ciudad: 'SANTA CRUZ',
      dir: 'Calle Pedro Vélez 195',
      tel: '+591 79047111',
      email: 'ultranex-sc@hotmail.com'
    },
    {
      id: 'lpz',
      ciudad: 'LA PAZ',
      dir: 'Calle Ingavi 721, Edif. Villmag',
      tel: '+591 72234520',
      email: 'ultranexcargo@gmail.com'
    },
    {
      id: 'cbb',
      ciudad: 'COCHABAMBA',
      dir: 'Calle Hamiraya #340',
      tel: '+591 71700386',
      email: 'justo_casilla@hotmail.com'
    },
    {
      id: 'tja',
      ciudad: 'TARIJA',
      dir: 'Calle Daniel Campos y Cochabamba',
      tel: '+591 78220776',
      email: 'tja@ultranex.com'
    },
    {
      id: 'oru',
      ciudad: 'ORURO',
      dir: 'Calle La Plata casi Av. España',
      tel: '+591 68284008 / 69583645',
      email: 'oru@ultranex.com'
    },
    {
      id: 'pts',
      ciudad: 'POTOSÍ',
      dir: 'Calle Hoyos 216, Zona San Martín',
      tel: '+591 78636188 / 73890436',
      email: 'pts@ultranex.com'
    },
    {
      id: 'chu',
      ciudad: 'SUCRE',
      dir: 'Calle Santísima Trinidad N° 1 (Sucre)',
      tel: '+591 73466826',
      email: 'chu@ultranex.com'
    },
    {
      id: 'ben',
      ciudad: 'BENI',
      dir: 'Rómulo Mendoza entre Fabián Monasterio y Hnos Rioja Aponte #135 (Trinidad)',
      tel: '+591 72841994 / 71144403',
      email: 'ben@ultranex.com'
    },
    {
      id: 'pan',
      ciudad: 'RIBERALTA',
      dir: 'Barrio San Antonio, calle Sucre y Oruro (esquina)',
      tel: '+591 75196921',
      email: 'pan@ultranex.com'
    }
  ];

  sedeActiva = this.sedes[0];

  cambiarSede(sede: any) {
    this.sedeActiva = sede;
  }
}
