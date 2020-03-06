import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgComprovantePage } from './pg-comprovante.page';

const routes: Routes = [
  {
    path: '',
    component: PgComprovantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgComprovantePageRoutingModule {}
