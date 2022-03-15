import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { TicketPenComponent } from './ticket-pen/ticket-pen.component';
import { TicketResComponent } from './ticket-res/ticket-res.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'categorias', component: CategoriasComponent },
      { path: 'ticketPen', component: TicketPenComponent },
      { path: 'ticketRes', component: TicketResComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionSerRoutingModule { }
