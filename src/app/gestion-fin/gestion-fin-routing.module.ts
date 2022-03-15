import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosFinComponent } from './estados-fin/estados-fin.component';
import { GastosComponent } from './gastos/gastos.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'pagos', component: PagosComponent},
      { path: 'gastos', component: GastosComponent},
      { path: 'estadosFin', component: EstadosFinComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFinRoutingModule { }
