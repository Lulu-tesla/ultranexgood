import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError, throwError } from 'rxjs';
import { AuthUser, LoginPayload, Usuario } from '../models';
import { environment } from 'src/app/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'ultranex_token';
  private readonly USER_KEY  = 'ultranex_user';

  private _currentUser = signal<Usuario | null>(this.loadUser());
  private _token       = signal<string | null>(this.loadToken());

  readonly currentUser  = this._currentUser.asReadonly();
  readonly isLoggedIn   = computed(() => !!this._token());
  readonly isAdmin      = computed(() => this._currentUser()?.rol === 'admin' || this._currentUser()?.rol === 'superadmin');
  readonly isTransportista = computed(() => this._currentUser()?.rol === 'transportista');

  constructor(private http: HttpClient, private router: Router) {}

  login(payload: LoginPayload) {
    return this.http.post<AuthUser>(`${environment.apiUrl}/auth/login`, payload).pipe(
      tap(res => this.setSession(res)),
      catchError(err => throwError(() => err))
    );
  }

  logout(): void {
    this.http.post(`${environment.apiUrl}/auth/logout`, {}).subscribe();
    this.clearSession();
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return this._token();
  }

  private setSession(auth: AuthUser): void {
    localStorage.setItem(this.TOKEN_KEY, auth.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(auth.user));
    this._token.set(auth.token);
    this._currentUser.set(auth.user);
  }

  private clearSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._token.set(null);
    this._currentUser.set(null);
  }

  private loadToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private loadUser(): Usuario | null {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }
}
