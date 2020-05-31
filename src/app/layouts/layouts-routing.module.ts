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
      },
      {
        path: 'award',
        loadChildren: () => import('../pages/award/award.module').then(m => m.AwardModule)
      },
      {
        path: 'company-profile',
        loadChildren: () => import('../pages/company-profile/company-profile.module').then(m => m.CompanyProfileModule)
      },
      {
        path: 'organization',
        loadChildren: () => import('../pages/organization/organization.module').then(m => m.OrganizationModule)
      },
      {
        path: 'page-not-found',
        loadChildren: () => import('../pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
      },
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
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
