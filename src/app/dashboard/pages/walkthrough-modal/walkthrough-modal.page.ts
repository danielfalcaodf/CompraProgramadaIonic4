import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-walkthrough-modal',
  templateUrl: './walkthrough-modal.page.html',
  styleUrls: ['./walkthrough-modal.page.scss'],
})
export class WalkthroughModalPage  {
  @ViewChild('slideOpen', { static: false }) slideOpen: IonSlides;

  slideList: any;
  slideIndex = 0;
  constructor(private navParams: NavParams, private modalCtrl: ModalController) {
    console.log( this.navParams.get('dado'));
    this.slideList = this.navParams.get('dado');
   }

     async onSlideChanged(): Promise<void> {
    await this.slideOpen.getActiveIndex().then(index => {
      this.slideIndex = index;
    });
    console.log('Slide changed! Current index is', this.slideIndex);
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  proximoSlide() {
    this.slideOpen.slideNext();
  }


}
