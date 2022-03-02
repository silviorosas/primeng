import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarianarsComponent } from './marianars.component';

const routes: Routes = [{ path: '', component: MarianarsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarianarsRoutingModule { }
