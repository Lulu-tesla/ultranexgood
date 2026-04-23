import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="admin">
      <aside class="admin__sidebar">
        <div class="admin__sidebar-logo">
          <span class="admin__logo-name">ULTRANEX</span>
          <span class="admin__logo-sub">Panel Admin</span>
        </div>
        <nav class="admin__nav">
          @for (item of navItems; track item.label) {
            <button class="admin__nav-item" [class.is-active]="activeTab() === item.id" (click)="activeTab.set(item.id)">
              <span class="admin__nav-icon" [innerHTML]="item.icon"></span>
              {{ item.label }}
            </button>
          }
        </nav>
        <a routerLink="/" class="admin__nav-item admin__nav-item--bottom">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Ver sitio web
        </a>
      </aside>
      <main class="admin__content">
        <div class="admin__topbar">
          <h2 class="admin__page-title">{{ currentTitle }}</h2>
          <div class="admin__topbar-actions">
            <div class="admin__user-chip">
              <div class="admin__user-avatar">A</div>
              <span>Admin</span>
            </div>
          </div>
        </div>

        <!-- DASHBOARD METRICS -->
        @if (activeTab() === 'dashboard') {
          <div class="admin__metrics">
            @for (m of metrics; track m.label) {
              <div class="admin__metric-card" [style.borderTopColor]="m.color">
                <div class="admin__metric-val" [style.color]="m.color">{{ m.valor }}</div>
                <div class="admin__metric-label">{{ m.label }}</div>
              </div>
            }
          </div>
          <div class="admin__section-title">Envíos recientes</div>
          <div class="admin__table-wrap">
            <div class="admin__table">
              <div class="admin__table-head"><span>Código</span><span>Origen</span><span>Destino</span><span>Estado</span><span>Fecha</span><span>Acciones</span></div>
              @for (e of recentEnvios; track e.codigo) {
                <div class="admin__table-row">
                  <span class="admin__code">{{ e.codigo }}</span>
                  <span>{{ e.origen }}</span>
                  <span>{{ e.destino }}</span>
                  <span><span class="badge" [class]="'badge--' + e.badgeColor">{{ e.estadoLabel }}</span></span>
                  <span style="color:var(--color-text-muted);font-size:0.85rem">{{ e.fecha }}</span>
                  <span><button class="btn btn--sm" style="border:1px solid var(--color-border);font-size:0.8rem;padding:5px 10px;">Ver</button></span>
                </div>
              }
            </div>
          </div>
        }

        @if (activeTab() !== 'dashboard') {
          <div class="admin__placeholder">
            <div class="admin__placeholder-icon">⚙️</div>
            <h3>Módulo en desarrollo</h3>
            <p>Este módulo estará disponible en la versión completa con backend Laravel.</p>
          </div>
        }
      </main>
    </div>
  `,
  styles: [`
    .admin { display: flex; min-height: 100vh; background: var(--color-off-white); padding-top: var(--navbar-height); }
    .admin__sidebar { width: 240px; background: var(--ultranex-blue-dark); flex-shrink: 0; display: flex; flex-direction: column; position: sticky; top: var(--navbar-height); height: calc(100vh - var(--navbar-height)); overflow-y: auto; }
    .admin__sidebar-logo { padding: 24px 20px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .admin__logo-name { display: block; font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: white; letter-spacing: 0.06em; }
    .admin__logo-sub { display: block; font-size: 0.65rem; color: var(--ultranex-yellow); font-family: var(--font-display); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 2px; }
    .admin__nav { padding: 12px 8px; flex: 1; display: flex; flex-direction: column; gap: 2px; }
    .admin__nav-item { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 8px; font-family: var(--font-display); font-size: 0.88rem; font-weight: 600; color: rgba(255,255,255,0.6); cursor: pointer; text-transform: uppercase; letter-spacing: 0.04em; transition: all 0.2s; background: none; border: none; width: 100%; text-align: left; text-decoration: none; }
    .admin__nav-item:hover { color: white; background: rgba(255,255,255,0.08); }
    .admin__nav-item.is-active { color: white; background: rgba(255,255,255,0.12); border-left: 3px solid var(--ultranex-yellow); }
    .admin__nav-item--bottom { margin-top: auto; margin: 8px; }
    .admin__nav-icon { width: 16px; height: 16px; display: flex; }
    .admin__content { flex: 1; padding: var(--space-xl); overflow: auto; }
    .admin__topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-xl); }
    .admin__page-title { font-size: 1.5rem; font-weight: 800; }
    .admin__user-chip { display: flex; align-items: center; gap: 8px; background: white; border: 1px solid var(--color-border); border-radius: 999px; padding: 6px 14px 6px 6px; font-size: 0.85rem; font-weight: 600; }
    .admin__user-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--ultranex-blue); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; }
    .admin__metrics { display: grid; grid-template-columns: repeat(4,1fr); gap: var(--space-md); margin-bottom: var(--space-xl); }
    .admin__metric-card { background: white; border-radius: var(--radius-lg); border: 1.5px solid var(--color-border); padding: var(--space-lg) var(--space-xl); border-top-width: 3px; }
    .admin__metric-val { font-family: var(--font-display); font-size: 2rem; font-weight: 800; margin-bottom: 4px; }
    .admin__metric-label { font-size: 0.8rem; color: var(--color-text-muted); font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.06em; }
    .admin__section-title { font-weight: 700; font-size: 1rem; font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: var(--space-md); }
    .admin__table-wrap { background: white; border-radius: var(--radius-lg); border: 1.5px solid var(--color-border); overflow: hidden; }
    .admin__table { overflow-x: auto; }
    .admin__table-head { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1.2fr 1fr 0.6fr; padding: 10px 20px; background: var(--color-off-white); font-family: var(--font-display); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); border-bottom: 1px solid var(--color-border); min-width: 640px; }
    .admin__table-row { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1.2fr 1fr 0.6fr; padding: 12px 20px; align-items: center; border-bottom: 1px solid var(--color-border); min-width: 640px; }
    .admin__table-row:last-child { border-bottom: none; }
    .admin__table-row:hover { background: var(--color-off-white); }
    .admin__code { font-family: var(--font-display); font-weight: 700; font-size: 0.85rem; color: var(--ultranex-blue); }
    .admin__placeholder { text-align: center; padding: var(--space-3xl) 0; color: var(--color-text-muted); }
    .admin__placeholder-icon { font-size: 3rem; margin-bottom: var(--space-md); }
    .admin__placeholder h3 { color: var(--color-text-primary); margin-bottom: 8px; }
  `]
})
export class AdminComponent {
  activeTab = signal('dashboard');

  navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
    { id: 'envios',    label: 'Envíos',    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>' },
    { id: 'clientes',  label: 'Clientes',  icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
    { id: 'reportes',  label: 'Reportes',  icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
    { id: 'config',    label: 'Config.',   icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41"/><path d="M4.93 19.07l1.41-1.41"/></svg>' },
  ];

  get currentTitle(): string {
    return this.navItems.find(n => n.id === this.activeTab())?.label ?? 'Dashboard';
  }

  metrics = [
    { valor: '247', label: 'Envíos hoy',       color: 'var(--ultranex-blue)' },
    { valor: '18',  label: 'En tránsito',       color: '#2563eb' },
    { valor: '5',   label: 'Retrasados',        color: 'var(--ultranex-red)' },
    { valor: 'Bs 12.4k', label: 'Ingresos mes', color: 'var(--color-success)' },
  ];

  recentEnvios = [
    { codigo: 'UNX-2024-001240', origen: 'La Paz',     destino: 'Santa Cruz', estadoLabel: 'En tránsito', badgeColor: 'blue',    fecha: '15 Ene 2024' },
    { codigo: 'UNX-2024-001239', origen: 'Santa Cruz', destino: 'Cochabamba', estadoLabel: 'Entregado',   badgeColor: 'success', fecha: '15 Ene 2024' },
    { codigo: 'UNX-2024-001238', origen: 'Cochabamba', destino: 'Oruro',      estadoLabel: 'Retrasado',   badgeColor: 'warning', fecha: '14 Ene 2024' },
    { codigo: 'UNX-2024-001237', origen: 'La Paz',     destino: 'Potosí',     estadoLabel: 'En proceso',  badgeColor: 'yellow',  fecha: '14 Ene 2024' },
  ];
}
