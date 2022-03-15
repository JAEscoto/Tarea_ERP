import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFinRoutingModule } from './gestion-fin-routing.module';
import { PagosComponent } from './pagos/pagos.component';
import { GastosComponent } from './gastos/gastos.component';
import { EstadosFinComponent } from './estados-fin/estados-fin.component';


@NgModule({
  declarations: [
    PagosComponent,
    GastosComponent,
    EstadosFinComponent
  ],
  imports: [
    CommonModule,
    GestionFinRoutingModule
  ]
})
export class GestionFinModule { }
