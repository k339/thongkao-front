import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {PortfolioInfo} from '../../modals/portfolio-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  portfolioInfoList: PortfolioInfo[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getPortfolioList();
  }

  getPortfolioList() {
    this.portfolioService.getPortfolioList().subscribe(res => {
      this.portfolioInfoList = res.slice(0, 8);
    });
  }
}
