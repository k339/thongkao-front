import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setUsername(username: string) {
    localStorage.setItem('username', username);
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setRule(rules: Array<string>) {
    localStorage.setItem('rules', rules.join(','));
  }

  getRules(): Array<string> {
    const rules = localStorage.getItem('rules');
    if (rules) {
      return rules.split(',');
    } else {
      return [];
    }
  }
}
