import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkthroughModalPage } from './walkthrough-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WalkthroughModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkthroughModalPageRoutingModule {}
