import { OverlayService } from './../../../core/services/overlay.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, Platform } from '@ionic/angular';
import { WalkthroughModalPage } from '../walkthrough-modal/walkthrough-modal.page';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
})
export class ContratoPage {
  checkbox = false;
  leis = [
    { text: 'Li e aceito o Parágrafo Primeiro na Cláusula 3ª', checked: false },
    { text: 'Li e aceito a Cláusula 5ª', checked: false },
    { text: 'Li e aceito a Cláusula 6ª', checked: false },
    { text: 'Li e aceito a Cláusula 9ª', checked: false },
  ];
  check = [];
  btnConfir = true;
  // tslint:disable-next-line: max-line-length
  constructor(
    private modalController: ModalController,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private file: File,
    private transfer: FileTransfer,
    private fileOpener: FileOpener,
    private platform: Platform) {
    const check = this.route.snapshot.paramMap.get('checkbox');
    // tslint:disable-next-line: triple-equals
    if (check == 'false') {
      this.checkbox = false;
    // tslint:disable-next-line: triple-equals
    } else if (check == 'true') {
      this.checkbox = true;
    }
    this.init();
  }
  async init() {
    // tslint:disable-next-line: triple-equals
    if (this.checkbox == true) {
      const slides = [

        {
          TituloText: 'Confiança',
          Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!',
          imageUrl: 'assets/img/help/help-1-5.png'
        }

      ];
      await this.openModal(WalkthroughModalPage, slides);
    }
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
  voltar() {
    this.navCtrl.pop();
  }
  teste(lei) {

    console.log(lei.checked);
    // tslint:disable-next-line: triple-equals
    if (lei.checked == false) {
      console.log(lei.checked);
      this.check.push(lei.checked);
    // tslint:disable-next-line: triple-equals
    } else if (lei.checked == true) {
      this.check.pop();
      console.log(this.check);
    }

    console.log(this.check.length, this.check);
    // tslint:disable-next-line: triple-equals
    if (this.check.length == 4) {
      this.btnConfir = false;
    } else {
      this.btnConfir = true;
    }

  }
  async startAlert() {
    await this.overlayService.alert({
      message: 'Você leu e aceita os termos do contrato?',
      buttons: [
        {
          text: 'sim',
          handler: async () => {
            const slides = [

              {
                TituloText: 'Confiança',
                Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!',
                imageUrl: 'assets/img/help/help-1-1.png'
              },
              {
                TituloText: 'Confiança',
                Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!',
                imageUrl: 'assets/img/help/help-1-6.png'
              }

            ];
            await this.openModal(WalkthroughModalPage, slides);
            await this.navCtrl.navigateRoot(['app']);
          }
        },
        {
          text: 'Não, cancelar',
          handler: () => {
            console.log('Não, cancelar');
          }
        }

      ]
    });
  }
  openPdf() {
    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download('https://www.w3c.br/pub/Cursos/CursoHTML5/html5-web.pdf', path + 'contrato.pdf')
      .then(entry => {
        const url = entry.toURL();


        this.fileOpener.open(url, 'application/pdf');

      }
      );
  }
}
