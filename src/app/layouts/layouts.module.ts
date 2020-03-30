import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LayoutsRoutingModule } from './layouts-routing.module';



@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    LayoutsRoutingModule,
    CommonModule
  ]
})
export class LayoutsModule { }
