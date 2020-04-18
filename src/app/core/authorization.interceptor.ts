import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor{

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getToken();
    req.headers.set('Content-Type', 'application/json')
    if (token && token !== '') {
      req = req.clone({
        headers: req.headers.set('Authorization', token)
      });
    }
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>> ', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            localStorage.clear();
            this.router.navigate(['/admin/login'])
          }
          if (error.status === 403) {
            this.router.navigate(['/admin/unauthorized'])
          }
        }
        return throwError(error);
      })
    );
  }
}
