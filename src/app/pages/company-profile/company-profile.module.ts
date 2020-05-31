import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileComponent } from './company-profile.component';
import {CompanyProfileRoutingModule} from './company-profile-routing.module';



@NgModule({
  declarations: [CompanyProfileComponent],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule
  ]
})
export class CompanyProfileModule { }
