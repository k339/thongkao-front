import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { PortfolioDetailComponent } from './components/portfolio-detail/portfolio-detail.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [PortfolioMainComponent, PortfolioDetailComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
