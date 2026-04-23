import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, PaginatedResponse, Envio, Cotizacion, CotizacionResult } from '../models';
import { environment } from 'src/app/environments/environment';

@Injectable({ providedIn: 'root' })
export class EnviosService {
  private baseUrl = `${environment.apiUrl}/envios`;

  constructor(private http: HttpClient) {}

  rastrear(codigo: string): Observable<ApiResponse<Envio>> {
    return this.http.get<ApiResponse<Envio>>(`${this.baseUrl}/rastrear/${codigo}`);
  }

  getAll(page = 1, perPage = 15, filtros?: Record<string, string>): Observable<PaginatedResponse<Envio>> {
    let params = new HttpParams().set('page', page).set('per_page', perPage);
    if (filtros) {
      Object.entries(filtros).forEach(([k, v]) => { if (v) params = params.set(k, v); });
    }
    return this.http.get<PaginatedResponse<Envio>>(this.baseUrl, { params });
  }

  getMisEnvios(): Observable<PaginatedResponse<Envio>> {
    return this.http.get<PaginatedResponse<Envio>>(`${this.baseUrl}/mis-envios`);
  }

  getById(id: number): Observable<ApiResponse<Envio>> {
    return this.http.get<ApiResponse<Envio>>(`${this.baseUrl}/${id}`);
  }

  crear(data: Partial<Envio>): Observable<ApiResponse<Envio>> {
    return this.http.post<ApiResponse<Envio>>(this.baseUrl, data);
  }

  actualizar(id: number, data: Partial<Envio>): Observable<ApiResponse<Envio>> {
    return this.http.put<ApiResponse<Envio>>(`${this.baseUrl}/${id}`, data);
  }

  actualizarEstado(id: number, estado: string, ubicacion?: string): Observable<ApiResponse<Envio>> {
    return this.http.patch<ApiResponse<Envio>>(`${this.baseUrl}/${id}/estado`, { estado, ubicacion });
  }

  cotizar(data: Cotizacion): Observable<ApiResponse<CotizacionResult>> {
    return this.http.post<ApiResponse<CotizacionResult>>(`${environment.apiUrl}/cotizacion`, data);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
