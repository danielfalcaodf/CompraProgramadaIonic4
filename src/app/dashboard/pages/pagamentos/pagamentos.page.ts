import { Component, OnInit } from '@angular/core';
import { PagamentoStatus } from '../../models/pagamentostatus.model';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/shared/components/popover/popover.component';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.page.html',
  styleUrls: ['./pagamentos.page.scss'],
})
export class PagamentosPage implements OnInit {
  // tslint:disable-next-line: max-line-length
  pgagora: Array<{ idFatura: string, parcelaAtual: number, parcelaFinal: number, valorParcela: number, dataVecimento: string, btn: string }>;
  pgStatus: Array<PagamentoStatus>;
  constructor(public navCtrl: NavController, public popoverController: PopoverController) {
  this.pgagora = [
    {
      idFatura: '25058a1s5d1asd',
      parcelaAtual: 1,
      parcelaFinal: 48,
      valorParcela: 499,
      dataVecimento: '15/06/19',
      btn: 'Pagar Agora',
    }
  ];

  this.pgStatus = [
      {
        idFatura: '25058a1s5d1asd',
        parcelaAtual: 1,
        parcelaFinal: 48,
        valorParcela: 499,
        dataVecimento: '15/06/19',
        atrasso: 12,
        icon: 'alert',
        btn: 'Pagar Agora',
        color: 'danger'
      },
      {
        idFatura: '25058a1s5d1asd',
        parcelaAtual: 1,
        parcelaFinal: 48,
        valorParcela: 499,
        dataVecimento: '15/06/19',
        atrasso: 12,
        icon: 'alert',
        btn: 'Pagar Agora',
        color: 'danger'
      },
      {
        idFatura: '25058a1s5d1asd',
        parcelaAtual: 1,
        parcelaFinal: 48,
        valorParcela: 499,
        dataVecimento: '15/06/19',
        atrasso: 12,
        icon: 'alert',
        btn: 'Pagar Agora',
        color: 'danger'
      },
      {
        idFatura: '25058a1s5d1asd',
        parcelaAtual: 1,
        parcelaFinal: 48,
        valorParcela: 499,
        dataVecimento: '15/06/19',
        atrasso: 12,
        icon: 'alert',
        btn: 'Pagar Agora',
        color: 'danger'
      }
    ];
  }

  ngOnInit() {
  }

  ionViewDidLoad() {



  }
  rota(acao, dados) {
    // tslint:disable-next-line: triple-equals
    if (acao == 'Pagar Agora') {
      this.navCtrl.navigateForward(['app', 'pagamento', 'asd']);
    } else {
      this.navCtrl.navigateForward(['app', 'comprovante', 'asdasd']);
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
}
