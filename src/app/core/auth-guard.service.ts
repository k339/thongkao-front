import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  adminAccess: Array<string> = [
    '/admin/user',
    '/admin/portfolio'
  ]
  webMasterAccess: Array<string> = [
    '/admin/portfolio'
  ]

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const username = this.localStorageService.getUsername();
    const token = this.localStorageService.getToken();
    const rules = this.localStorageService.getRules();
    if (username && token && rules) {
      if (this.isAdmin(rules)) {
        return this.adminAccess.includes(state.url);
      }
      if (this.isWebmaster(rules)) {
        return this.webMasterAccess.includes(state.url);
      }
    } else {
      this.router.navigate(['/admin/login']);
      return true;
    }
    return false;
  }

  isAdmin(rules: Array<string>): boolean {
    return rules.includes('ADMIN');
  }

  isWebmaster(rules: Array<string>): boolean {
    return rules.includes('WEB_MASTER');
  }
}
