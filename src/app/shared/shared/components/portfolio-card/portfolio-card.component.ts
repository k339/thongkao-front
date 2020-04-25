import {Component, Input, OnInit} from '@angular/core';
import {PortfolioInfo} from '../../../../modals/portfolio-info';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  @Input()
  portfolioInfo: PortfolioInfo
  image = ``;

  constructor() { }

  ngOnInit(): void {
    if (this.portfolioInfo) {
      this.image = `${environment.apiUrl}/common/file/` + this.portfolioInfo.files[0].name;
    }
  }

}
