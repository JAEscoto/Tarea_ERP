import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { ContratacionComponent } from './contratacion/contratacion.component';
import { SalariosComponent } from './salarios/salarios.component';
import { EmpleadosComponent } from './empleados/empleados.component';


@NgModule({
  declarations: [  
    ContratacionComponent, SalariosComponent, EmpleadosComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule
  ]
})
export class RrhhModule { }
