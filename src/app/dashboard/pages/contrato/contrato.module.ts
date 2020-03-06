import { NgModule } from '@angular/core';

import { ContratoPageRoutingModule } from './contrato-routing.module';

import { ContratoPage } from './contrato.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { WalkthroughModalPageModule } from '../walkthrough-modal/walkthrough-modal.module';

@NgModule({
  imports: [
    SharedModule,
    ContratoPageRoutingModule,
    WalkthroughModalPageModule
  ],
  declarations: [ContratoPage]

})
export class ContratoPageModule {}
