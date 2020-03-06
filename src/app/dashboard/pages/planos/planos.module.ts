import { WalkthroughModalPageModule } from './../walkthrough-modal/walkthrough-modal.module';

import { NgModule } from '@angular/core';

import { PlanosPageRoutingModule } from './planos-routing.module';

import { PlanosPage } from './planos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PlanosPageRoutingModule,
    WalkthroughModalPageModule
  ],
  declarations: [PlanosPage]
})
export class PlanosPageModule {}
