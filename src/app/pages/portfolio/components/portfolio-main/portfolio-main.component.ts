import { Component, OnInit } from '@angular/core';
import {PortfolioInfo} from '../../../../modals/portfolio-info';
import {PortfolioService} from '../../../../services/portfolio.service';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.scss']
})
export class PortfolioMainComponent implements OnInit {

  portfolioInfoList: PortfolioInfo[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getPortfolioList();
  }

  getPortfolioList() {
    this.portfolioService.getPortfolioList().subscribe(res => {
      this.portfolioInfoList = res;
    });
  }

}
