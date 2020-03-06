import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';


import { WalkthroughModalPageRoutingModule } from './walkthrough-modal-routing.module';

import { WalkthroughModalPage } from './walkthrough-modal.page';

@NgModule({
  imports: [
    SharedModule,
    WalkthroughModalPageRoutingModule
  ],
  declarations: [WalkthroughModalPage],
  entryComponents: [
    WalkthroughModalPage
]
})
export class WalkthroughModalPageModule {}
