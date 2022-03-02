import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule
  ],
  exports: [
    InputTextModule,
    CardModule
  ]
})
export class StylesModule { }
