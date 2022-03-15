import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {path: 'gestion-ser', loadChildren: () => import('./gestion-ser/gestion-ser.module').then(m =>m.GestionSerModule)},
  {path: 'gestion-fin', loadChildren:()=>import('./gestion-fin/gestion-fin.module').then(m => m.GestionFinModule)},
  {path: 'fabricacion', loadChildren: () => import('./fabricacion/fabricacion.module').then(m => m.FabricacionModule)},
  {path: 'recursosH', loadChildren: () => import('./rrhh/rrhh.module').then(m => m.RrhhModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
