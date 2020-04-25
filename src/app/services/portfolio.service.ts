import { Injectable } from '@angular/core';
import {PortfolioInfo} from '../modals/portfolio-info';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolioList(): Observable<PortfolioInfo[]> {
    return this.http.get<PortfolioInfo[]>(`${environment.apiUrl}/portfolio/list`);
  }

  getPortfolio(id: number): Observable<PortfolioInfo> {
    return this.http.get<PortfolioInfo>(`${environment.apiUrl}/portfolio/${id}`);
  }

}
