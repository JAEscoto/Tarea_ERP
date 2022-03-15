import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionSerRoutingModule } from './gestion-ser-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { TicketPenComponent } from './ticket-pen/ticket-pen.component';
import { TicketResComponent } from './ticket-res/ticket-res.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    TicketPenComponent,
    TicketResComponent
  ],
  imports: [
    CommonModule,
    GestionSerRoutingModule
  ]
})
export class GestionSerModule { }
