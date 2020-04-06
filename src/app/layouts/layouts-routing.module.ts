import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('../pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
