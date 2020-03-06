import { WalkthroughModalPage } from './../pages/walkthrough-modal/walkthrough-modal.page';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalController: ModalController) {

  }

  async presentModal(dados) {
    console.log(dados)
    const modal = await this.modalController.create({
      component: WalkthroughModalPage,
      componentProps: {
        'dado':  dados
      }
    });
    return await modal.present();
  }
}
