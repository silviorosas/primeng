import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GmansnetComponent } from './gmansnet.component';

const routes: Routes = [{ path: '', component: GmansnetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GmansnetRoutingModule { }
