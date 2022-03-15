import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratacionComponent } from './contratacion/contratacion.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SalariosComponent } from './salarios/salarios.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'contratacion', component: ContratacionComponent},
      { path: 'salarios', component: SalariosComponent},
      { path: 'empleados', component: EmpleadosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }
