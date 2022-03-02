import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VamorillaComponent } from './vamorilla.component';

const routes: Routes = [{ path: '', component: VamorillaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VamorillaRoutingModule { }
