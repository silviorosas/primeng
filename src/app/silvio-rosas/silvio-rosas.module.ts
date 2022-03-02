import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SilvioRosasRoutingModule } from './silvio-rosas-routing.module';
import { SilvioRosasComponent } from './silvio-rosas.component';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    SilvioRosasComponent
  ],
  imports: [
    CommonModule,
    SilvioRosasRoutingModule,
    TableModule,
    MultiSelectModule,
    ButtonModule
  ]
})
export class SilvioRosasModule { }
