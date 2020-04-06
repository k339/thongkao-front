import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminMainComponent} from './components/admin-main/admin-main.component';
import {AdminLoginComponent} from './components/admin-login/admin-login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMainComponent
  },
  {
    path: 'login',
    component: AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
