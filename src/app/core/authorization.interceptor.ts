import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor{

  constructor(private localStorageService: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getToken();
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
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log('error--->>> ', err.message);
          }
        }
      })
    );
  }
}
