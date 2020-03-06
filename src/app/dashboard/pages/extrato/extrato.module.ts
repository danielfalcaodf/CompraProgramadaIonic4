import { NgModule } from '@angular/core';


import { ExtratoPageRoutingModule } from './extrato-routing.module';

import { ExtratoPage } from './extrato.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ExtratoPageRoutingModule
  ],
  declarations: [ExtratoPage]
})
export class ExtratoPageModule {}
