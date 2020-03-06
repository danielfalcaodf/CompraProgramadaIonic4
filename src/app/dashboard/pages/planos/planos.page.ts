import { Component } from '@angular/core';
import { PlanosCarros } from '../../models/planoscarros';
import { NavController, PopoverController, ModalController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/shared/components/popover/popover.component';
import { ActivatedRoute } from '@angular/router';
import { WalkthroughModalPage } from '../walkthrough-modal/walkthrough-modal.page';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.page.html',
  styleUrls: ['./planos.page.scss'],
})
export class PlanosPage  {
  listplanos: Array<PlanosCarros>;
  meuPlano: Array<PlanosCarros>;
  // tslint:disable-next-line: max-line-length
  constructor(public navCtrl: NavController, private route: ActivatedRoute, public popoverController: PopoverController, private modalController: ModalController) {
    this.listplanos = [
      {
        valorVista: 21000,
        parcela: 48,
        valorParcela: 499,
        btn: 'Quero esse plano',

      },
      {
        valorVista: 30000,
        parcela: 48,
        valorParcela: 600,
        btn: 'Visualizar contrato',

      },
    ];
    console.log(this.route.snapshot.paramMap.get('help'));
    this.init();
  }
 async init() {
    console.log(this.route.snapshot.paramMap.get('help'));
    // tslint:disable-next-line: triple-equals
    if (this.route.snapshot.paramMap.get('help') == 'true') {
      const slides = [

        {
          TituloText: 'Confiança',
          Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!',
          imageUrl: 'assets/img/help/help-1-2.png'
        }

      ];
      await this.openModal(WalkthroughModalPage, slides);
    // tslint:disable-next-line: triple-equals
    } else if (this.route.snapshot.paramMap.get('help') == 'false') {
      console.log(this.route.snapshot.paramMap.get('help'));
      const slides = [
        {
          TituloText: 'Está negativado, com score baixo ou não tem dinheiro para dar entrada no seu carro?',
          // tslint:disable-next-line: max-line-length
          Text: 'A Tony Veículos tem a solução pra você! Agora você pode programar a compra do carro dos seus sonhos com parcelas que cabem no seu bolso!',
          imageUrl: 'assets/img/help/help-1-1.png'
        },
        {
          TituloText: 'Confiança',
          Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!',
          imageUrl: 'assets/img/help/help-1-2.png'
        },
        {
          TituloText: 'Seu carro novo',
          Text: 'Após pagar as 12 primeiras parcelas em dia você já poderá levar seu carro pra casa! Não é incrível?',
          imageUrl: 'assets/img/help/help-1-3.png'
        },
        {
          TituloText: 'Retirada',
          Text: 'Após retirar o carro na loja, você continuará pagando as 36 parcelas restantes do seu plano.',
          imageUrl: 'assets/img/help/help-1-4.png'
        },
        {
          TituloText: 'Retirada',
          Text: 'Após retirar o carro na loja, você continuará pagando as 36 parcelas restantes do seu plano.',
          imageUrl: 'assets/img/help/help-1-5.png'
        },
        {
          TituloText: 'Retirada',
          Text: 'Após retirar o carro na loja, você continuará pagando as 36 parcelas restantes do seu plano.',
          imageUrl: 'assets/img/help/help-1-6.png'
        }

      ];
      // this.openModal(WalkthroughModalPage, slides);
    } else {
      const slides = [

        {
          TituloText: 'Confiança',
          Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!',
          imageUrl: 'assets/img/help/help-1-2.png'
        }

      ];
      await this.openModal(WalkthroughModalPage, slides);
    }
  }

  rota(plano) {
    // tslint:disable-next-line: triple-equals
    if (plano.btn == 'Quero esse plano') {
      this.navCtrl.navigateForward(['app', 'cadastroplano', 'a']);
    } else {
      this.navCtrl.navigateForward(['app', 'contrato', 'a', 'false']);

    }
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async openModal(modalPage, dados) {
    const modal = await this.modalController.create({
      component: modalPage,
      componentProps: {
        dado: dados
      }
    });
    return await modal.present();
  }


}
