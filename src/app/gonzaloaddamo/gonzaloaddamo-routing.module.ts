import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GonzaloaddamoComponent } from './gonzaloaddamo.component';

const routes: Routes = [{ path: '', component: GonzaloaddamoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GonzaloaddamoRoutingModule { }
