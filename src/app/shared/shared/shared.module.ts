import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PortfolioCardComponent],
    imports: [
      CommonModule,
      RouterModule
    ],
  exports: [
    PortfolioCardComponent
  ]
})
export class SharedModule { }
