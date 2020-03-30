import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DefaultLayoutComponent} from "./default-layout/default-layout.component";


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
