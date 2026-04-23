import { Component, signal, computed } from '@angular/core'; // Añadimos computed para mejores prácticas
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transportista',
  standalone: true,
  imports: [CommonModule,],
  template: `
    <div class="page-hero page-hero--blue" style="padding-bottom: var(--space-lg);">
      <div class="container">
        <span class="section-label" style="color:var(--ultranex-yellow)">Panel Transportista</span>
        <h1 class="page-hero__title" style="font-size:2.5rem; margin-bottom:8px;">Mis Rutas de Hoy</h1>
        <p class="page-hero__subtitle" style="margin:0; font-size:0.95rem;">Santa Cruz · {{ hoy }}</p>
      </div>
    </div>

    <div class="container" style="padding-top:var(--space-xl); padding-bottom:var(--space-3xl);">
      <div class="transport-layout">

        <div class="transport-metrics">
          <div class="transport-metric transport-metric--blue">
            <div class="transport-metric__val">{{ asignados().length }}</div>
            <div class="transport-metric__label">Asignados</div>
          </div>
          <div class="transport-metric transport-metric--yellow">
            <div class="transport-metric__val">{{ pendientes }}</div>
            <div class="transport-metric__label">Pendientes</div>
          </div>
          <div class="transport-metric transport-metric--green">
            <div class="transport-metric__val">{{ entregados }}</div>
            <div class="transport-metric__label">Entregados</div>
          </div>
        </div>

        <div class="transport-list">
          @for (e of asignados(); track e.codigo) {
            <div class="transport-card" [class.transport-card--done]="e.estado === 'entregado'">
              <div class="transport-card__left">
                <div class="transport-card__codigo">{{ e.codigo }}</div>
                <div class="transport-card__dir">📍 {{ e.direccion }}</div>
                <div class="transport-card__destinatario">{{ e.destinatario }}</div>
              </div>
              <div class="transport-card__right">
                <span class="badge" [class]="e.estado === 'entregado' ? 'badge--success' : 'badge--blue'">
                  {{ e.estado === 'entregado' ? 'Entregado' : 'Pendiente' }}
                </span>
                @if (e.estado !== 'entregado') {
                  <button class="btn btn--primary btn--sm" (click)="marcarEntregado(e)">
                    Confirmar entrega
                  </button>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .transport-layout { max-width: 800px; }
    .transport-metrics { display: grid; grid-template-columns: repeat(3,1fr); gap: var(--space-md); margin-bottom: var(--space-xl); }
    .transport-metric { background: white; border-radius: var(--radius-lg); padding: var(--space-lg) var(--space-xl); border-top: 3px solid; text-align: center; border: 1.5px solid var(--color-border); }
    .transport-metric--blue  { border-top-color: var(--ultranex-blue); }
    .transport-metric--yellow{ border-top-color: var(--ultranex-yellow); }
    .transport-metric--green { border-top-color: var(--color-success); }
    .transport-metric__val   { font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; }
    .transport-metric--blue  .transport-metric__val { color: var(--ultranex-blue); }
    .transport-metric--yellow .transport-metric__val { color: var(--ultranex-yellow-dark); }
    .transport-metric--green  .transport-metric__val { color: var(--color-success); }
    .transport-metric__label { font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.06em; font-family: var(--font-display); font-weight: 700; }
    .transport-list { display: flex; flex-direction: column; gap: var(--space-md); }
    .transport-card { background: white; border-radius: var(--radius-lg); border: 1.5px solid var(--color-border); padding: var(--space-lg) var(--space-xl); display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); transition: all 0.2s; }
    .transport-card:hover { box-shadow: var(--shadow-md); }
    .transport-card--done { opacity: 0.65; }
    .transport-card__codigo { font-family: var(--font-display); font-weight: 800; font-size: 1rem; color: var(--ultranex-blue); margin-bottom: 4px; }
    .transport-card__dir { font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 2px; }
    .transport-card__destinatario { font-size: 0.85rem; color: var(--color-text-muted); }
    .transport-card__right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; }
  `]
})
export class TransportistaComponent {
  hoy = new Date().toLocaleDateString('es-BO', { weekday: 'long', day: 'numeric', month: 'long' });

  asignados = signal([
    { codigo: 'UNX-2024-001240', direccion: 'Av. Busch 123, Equipetrol', destinatario: 'María González', estado: 'pendiente' },
    { codigo: 'UNX-2024-001241', direccion: 'Calle Sucre 456, Centro',   destinatario: 'Juan Pérez',       estado: 'pendiente' },
    { codigo: 'UNX-2024-001242', direccion: 'Barrio Las Palmas 789',     destinatario: 'Carlos Rojas',     estado: 'entregado' },
    { codigo: 'UNX-2024-001243', direccion: 'Urb. Norte, Calle 3 Nro 10', destinatario: 'Ana Flores',     estado: 'pendiente' },
  ]);

  // Usamos los paréntesis () para leer el valor del signal
  get pendientes(): number { return this.asignados().filter(e => e.estado !== 'entregado').length; }
  get entregados(): number { return this.asignados().filter(e => e.estado === 'entregado').length; }

  marcarEntregado(envio: any): void {
    // Para actualizar un objeto dentro de un signal de array:
    this.asignados.update(envios => {
      return envios.map(e => 
        e.codigo === envio.codigo ? { ...e, estado: 'entregado' } : e
      );
    });
  }
}