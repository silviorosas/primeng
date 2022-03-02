import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatiasBertoloRoutingModule } from './matias-bertolo-routing.module';
import { MatiasBertoloComponent } from './matias-bertolo.component';


@NgModule({
  declarations: [
    MatiasBertoloComponent
  ],
  imports: [
    CommonModule,
    MatiasBertoloRoutingModule
  ]
})
export class MatiasBertoloModule { }
