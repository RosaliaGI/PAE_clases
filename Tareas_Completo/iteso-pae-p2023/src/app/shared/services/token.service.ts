import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { 
    this.authStatus.next(this.isAuth());
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    // Cambiar el valor del observable a true
    this.authStatus.next(true);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    // Cambiar el valor del observable a false
    this.authStatus.next(false);
  }

  isAuth(): boolean {
    return !!this.getToken();
  }
}
