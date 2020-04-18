import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserLogin} from '../modals/user-login';
import {UserResponse} from '../modals/user-response';
import {User} from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  userLogin(userLogin: UserLogin): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.apiUrl}/login`, userLogin);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/admin/app-user/create`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/admin/app-user/list`)
  }
}
