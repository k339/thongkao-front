import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserLogin} from '../modals/user-login';
import {UserResponse} from '../modals/user-response';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  userLogin(userLogin: UserLogin): Observable<UserResponse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<UserResponse>(`${environment.apiUrl}/login`, userLogin, {headers});
  }
}
