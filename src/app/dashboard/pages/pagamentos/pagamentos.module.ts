import { NgModule } from '@angular/core';

import { PagamentosPageRoutingModule } from './pagamentos-routing.module';

import { PagamentosPage } from './pagamentos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PagamentosPageRoutingModule
  ],
  declarations: [PagamentosPage]
})
export class PagamentosPageModule {}
