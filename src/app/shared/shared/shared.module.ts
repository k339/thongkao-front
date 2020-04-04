import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';



@NgModule({
  declarations: [PortfolioCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioCardComponent
  ]
})
export class SharedModule { }
