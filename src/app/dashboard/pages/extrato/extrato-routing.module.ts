import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtratoPage } from './extrato.page';

const routes: Routes = [
  {
    path: '',
    component: ExtratoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtratoPageRoutingModule {}
