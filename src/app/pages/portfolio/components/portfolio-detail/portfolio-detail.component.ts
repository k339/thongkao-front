import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../../../services/portfolio.service';
import {PortfolioInfo} from '../../../../modals/portfolio-info';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {

  id: number;
  portfolioInfo: PortfolioInfo;
  baseImageUrl = `${environment.apiUrl}/common/file/`;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
      if (this.id) {
        this.getPortfolio(this.id);
      }
    });
  }

  getPortfolio(id: number) {
    this.portfolioService.getPortfolio(id).subscribe(res => {
      this.portfolioInfo = res;
    });
  }

}
