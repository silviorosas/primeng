import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VamorillaRoutingModule } from './vamorilla-routing.module';
import { VamorillaComponent } from './vamorilla.component';


@NgModule({
  declarations: [
    VamorillaComponent
  ],
  imports: [
    CommonModule,
    VamorillaRoutingModule
  ]
})
export class VamorillaModule { }
