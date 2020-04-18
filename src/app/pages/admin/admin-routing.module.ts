import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLoginComponent} from './components/admin-login/admin-login.component';
import {AdminMainComponent} from './components/admin-main/admin-main.component';
import {AdminPortfolioComponent} from './components/admin-portfolio/admin-portfolio.component';
import {AdminUserComponent} from './components/admin-user/admin-user.component';
import {AuthGuardService} from '../../core/auth-guard.service';
import {UnauthorizedComponent} from './components/unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/admin/portfolio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminMainComponent,
    children: [
      {
        path: 'portfolio',
        component: AdminPortfolioComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'user',
        component: AdminUserComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: 'login',
    component: AdminLoginComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
