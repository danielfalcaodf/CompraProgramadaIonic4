import { NgModule } from '@angular/core';

import { PgComprovantePageRoutingModule } from './pg-comprovante-routing.module';

import { PgComprovantePage } from './pg-comprovante.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PgComprovantePageRoutingModule
  ],
  declarations: [PgComprovantePage]
})
export class PgComprovantePageModule {}
