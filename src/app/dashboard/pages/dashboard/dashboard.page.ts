import { Component, OnInit } from '@angular/core';
import { PagamentoStatus } from '../../models/pagamentostatus.model';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/shared/components/popover/popover.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  i = 0;
  saldopg = 0;
  pgagora: Array<{ parcelaAtual: number, parcelaFinal: number, valorParcela: number, dataVecimento: string, idFatura: string }>;
  pgStatus: Array<PagamentoStatus>;
  constructor(public navCtrl: NavController, public popoverController: PopoverController) { }

  ngOnInit() {
    this.pgagora = [
      {
        idFatura: 'of324ko',
        parcelaAtual: 1,
        parcelaFinal: 48,
        valorParcela: 499,
        dataVecimento: '15/06/19'
      }
    ];
    this.pgStatus = [
      {
        idFatura: 'of324wko',
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
        idFatura: 'of324kfo',
        parcelaAtual: 2,
        parcelaFinal: 48,
        valorParcela: 499,
        dataVecimento: '15/06/19',
        atrasso: 12,
        icon: 'checkmark-circle',
        btn: 'Comprovante',
        color: 'success'
      },
      {
        idFatura: 'of324dko',
        parcelaAtual: 3,
        parcelaFinal: 48,
        valorParcela: 499,
        dataVecimento: '15/06/19',
        atrasso: 12,
        icon: 'alert',
        btn: 'Pagar Agora',
        color: 'danger'
      },
      {
        idFatura: 'of324kao',
        parcelaAtual: 1,
        parcelaFinal: 48,
        valorParcela: 499,
        dataVecimento: '15/06/19',
        atrasso: 12,
        icon: 'check',
        btn: 'Comprovate',
        color: 'danger'
      }
    ];
  }

  rota(acao, dados) {
    // tslint:disable-next-line: triple-equals
    if (acao == 'Pagar Agora') {
      this.navCtrl.navigateForward(['app', 'pagamento',  dados.idFatura]);
    } else {
      this.navCtrl.navigateForward(['app', 'comprovante', dados.idFatura]);
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
