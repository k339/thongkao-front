import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPortfolioComponent } from './components/admin-portfolio/admin-portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';



@NgModule({
  declarations: [
    AdminMainComponent,
    AdminLoginComponent,
    AdminPortfolioComponent,
    AdminUserComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
