import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardComponent } from './award.component';
import {AwardRoutingModule} from './award-routing.module';



@NgModule({
  declarations: [AwardComponent],
  imports: [
    CommonModule,
    AwardRoutingModule
  ]
})
export class AwardModule { }
