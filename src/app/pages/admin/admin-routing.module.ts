import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLoginComponent} from './components/admin-login/admin-login.component';
import {AdminMainComponent} from './components/admin-main/admin-main.component';
import {AdminPortfolioComponent} from './components/admin-portfolio/admin-portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginComponent
  },
  {
    path: 'main',
    component: AdminMainComponent,
    children: [{
      path: 'portfolio',
      component: AdminPortfolioComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
