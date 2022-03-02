import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarolinaFerrariRoutingModule } from './carolina-ferrari-routing.module';
import { CarolinaFerrariComponent } from './carolina-ferrari.component';


@NgModule({
  declarations: [
    CarolinaFerrariComponent
  ],
  imports: [
    CommonModule,
    CarolinaFerrariRoutingModule
  ]
})
export class CarolinaFerrariModule { }
