import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './triand/menu/menu.component'
import { AppComponent } from './app.component' 

const routes: Routes = [
  { path: 'AgustinaNavarrete17', loadChildren: () => import('./agustina-navarrete17/agustina-navarrete17.module').then(m => m.AgustinaNavarrete17Module) }, 
  { path: 'CarolinaFerrari', loadChildren: () => import('./carolina-ferrari/carolina-ferrari.module').then(m => m.CarolinaFerrariModule) }, 
  { path: 'Gmansnet', loadChildren: () => import('./gmansnet/gmansnet.module').then(m => m.GmansnetModule) }, 
  { path: 'Gonzaloaddamo', loadChildren: () => import('./gonzaloaddamo/gonzaloaddamo.module').then(m => m.GonzaloaddamoModule) }, 
  { path: 'Matias-Bertolo', loadChildren: () => import('./matias-bertolo/matias-bertolo.module').then(m => m.MatiasBertoloModule) }, 
  { path: 'Pablo', loadChildren: () => import('./pablo/pablo.module').then(m => m.PabloModule) }, 
  { path: 'SilvioRosas', loadChildren: () => import('./silvio-rosas/silvio-rosas.module').then(m => m.SilvioRosasModule) }, 
  { path: 'marianars', loadChildren: () => import('./marianars/marianars.module').then(m => m.MarianarsModule) }, 
  { path: 'vamorilla', loadChildren: () => import('./vamorilla/vamorilla.module').then(m => m.VamorillaModule) },
  {path: "", component: MenuComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
