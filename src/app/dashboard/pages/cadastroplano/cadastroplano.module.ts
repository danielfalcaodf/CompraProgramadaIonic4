import { NgModule } from '@angular/core';
import { CadastroplanoPageRoutingModule } from './cadastroplano-routing.module';
import { CadastroplanoPage } from './cadastroplano.page';
import { SharedModule } from 'src/app/shared/shared.module';
// import { WalkthroughModalPage } from '../walkthrough-modal/walkthrough-modal.page';
import { WalkthroughModalPageModule } from '../walkthrough-modal/walkthrough-modal.module';

@NgModule({
  imports: [
    SharedModule,
    CadastroplanoPageRoutingModule,
    WalkthroughModalPageModule,
    
  ],
  declarations: [CadastroplanoPage]
})
export class CadastroplanoPageModule {}
