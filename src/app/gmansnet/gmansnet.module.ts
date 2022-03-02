import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GmansnetRoutingModule } from './gmansnet-routing.module';
import { GmansnetComponent } from './gmansnet.component';


@NgModule({
  declarations: [
    GmansnetComponent
  ],
  imports: [
    CommonModule,
    GmansnetRoutingModule
  ]
})
export class GmansnetModule { }
