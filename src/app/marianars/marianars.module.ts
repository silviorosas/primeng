import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarianarsRoutingModule } from './marianars-routing.module';
import { MarianarsComponent } from './marianars.component';


@NgModule({
  declarations: [
    MarianarsComponent
  ],
  imports: [
    CommonModule,
    MarianarsRoutingModule
  ]
})
export class MarianarsModule { }
