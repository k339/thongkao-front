import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserLogin} from '../modals/user-login';
import {UserResponse} from '../modals/user-response';
import {User} from '../modals/user';
import {Portfolio} from '../modals/portfolio';
import {PortfolioInfo} from '../modals/portfolio-info';

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
    return this.http.get<User[]>(`${environment.apiUrl}/admin/app-user/list`);
  }

  getPortfolio(id: number): Observable<PortfolioInfo> {
    return this.http.get<PortfolioInfo>(`${environment.apiUrl}/admin/portfolio/${id}`);
  }

  getPortFolioList(): Observable<PortfolioInfo[]> {
    return this.http.get<PortfolioInfo[]>(`${environment.apiUrl}/admin/portfolio/list`);
  }

  createPortfolio(portfolio: Portfolio, images: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('data', JSON.stringify(portfolio));
    for (let i = 0; i < images.length; i++) {
      formData.append('image' + i, images[i]);
    }
    return this.http.post(`${environment.apiUrl}/admin/portfolio/create`, formData);
  }

  updatePortfolio(portfolio: Portfolio, images: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('data', JSON.stringify(portfolio));
    for (let i = 0; i < images.length; i++) {
      formData.append('image' + i, images[i]);
    }
    return this.http.post(`${environment.apiUrl}/admin/portfolio/update`, formData);
  }

  deletePortfolio(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/admin/portfolio/delete/${id}`);
  }
}
