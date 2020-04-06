import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioMainComponent} from './components/portfolio-main/portfolio-main.component';
import {PortfolioDetailComponent} from './components/portfolio-detail/portfolio-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioMainComponent
  },
  {
    path: ':id',
    component: PortfolioDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {

}
