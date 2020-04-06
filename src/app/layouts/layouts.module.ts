import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  declarations: [DefaultLayoutComponent, AdminLayoutComponent],
  imports: [
    LayoutsRoutingModule,
    CommonModule
  ]
})
export class LayoutsModule { }
