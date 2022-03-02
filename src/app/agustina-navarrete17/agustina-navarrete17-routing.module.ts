import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgustinaNavarrete17Component } from './agustina-navarrete17.component';

const routes: Routes = [{ path: '', component: AgustinaNavarrete17Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgustinaNavarrete17RoutingModule { }
