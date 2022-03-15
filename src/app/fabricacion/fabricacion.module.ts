import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricacionRoutingModule } from './fabricacion-routing.module';
import { MateriaPComponent } from './materia-p/materia-p.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { DesperdiciosComponent } from './desperdicios/desperdicios.component';


@NgModule({
  declarations: [
    MateriaPComponent,
    ProduccionComponent,
    DesperdiciosComponent
  ],
  imports: [
    CommonModule,
    FabricacionRoutingModule
  ]
})
export class FabricacionModule { }
