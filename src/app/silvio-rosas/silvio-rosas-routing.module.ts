import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SilvioRosasComponent } from './silvio-rosas.component';

const routes: Routes = [{ path: '', component: SilvioRosasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SilvioRosasRoutingModule { }
