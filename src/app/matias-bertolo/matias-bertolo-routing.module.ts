import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatiasBertoloComponent } from './matias-bertolo.component';

const routes: Routes = [{ path: '', component: MatiasBertoloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiasBertoloRoutingModule { }
