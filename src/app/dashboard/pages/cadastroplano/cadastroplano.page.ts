import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidaCpf } from 'src/app/validators/validcpf';
import { NavController, ModalController } from '@ionic/angular';
import { CepService } from 'src/app/core/services/cep.service';
import { WalkthroughModalPage } from '../walkthrough-modal/walkthrough-modal.page';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-cadastroplano',
  templateUrl: './cadastroplano.page.html',
  styleUrls: ['./cadastroplano.page.scss'],
})
export class CadastroplanoPage {
  displayConfirmar = true;
  displayCadastro = false;
  PlanoForm: FormGroup;
  // tslint:disable-next-line: variable-name
  error_messages: any;
  datas: Array<string>;
  loader: any;
  // tslint:disable-next-line: max-line-length
  constructor(private overlay: OverlayService, public formbuilder: FormBuilder, private navCtrl: NavController, private cep: CepService, private modalController: ModalController) {
    this.datas = [
      'Dia 05',
      'Dia 10',
      'Dia 15',
      'Dia 20',
      'Dia 25'
    ];
    this.init();
    this.buildForm();
  }

 async init() {
    console.log('ionViewDidLoad CadastroplanoPage');
    const slides = [

      {
        TituloText: 'Confiança',
        Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!',
        imageUrl: 'assets/img/help/help-1-3.png'
      }

    ];
    await this.openModal(WalkthroughModalPage, slides);
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
  buildForm() {
    this.PlanoForm = this.formbuilder.group({
      numRG: new FormControl(null, Validators.compose([Validators.required])),
      nome: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[A-Za-zÀ-ú \']*')
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])),
      cpf: new FormControl(null, Validators.compose([
        ValidaCpf.valCpf,
        Validators.minLength(11),
        Validators.required,
        Validators.maxLength(18)
      ])),


      tel: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(14), Validators.maxLength(15)])),

      data: new FormControl(this.datas[0], Validators.required),
      cep: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])),
      logradouro: new FormControl(null, Validators.compose([Validators.required])),
      num: new FormControl(null, Validators.compose([Validators.required])),
      complemento: new FormControl(),
      bairro: new FormControl(null, Validators.compose([Validators.required])),
      cidade: new FormControl(null, Validators.compose([Validators.required])),
      estado: new FormControl(null, Validators.compose([Validators.required])),

    });
    this.error_messages = {

      nome: [
        { type: 'required', message: 'É obrigatório informar o Nome Completo!' },
        { type: 'minlength', message: 'É obrigatório ter 10 caracteres!' },
        { type: 'pattern', message: 'Apenas letras' }
      ],
      email: [
        { type: 'required', message: 'É obrigatório informar o Email!' },
        { type: 'minlength', message: 'Isso não é Email' },
        { type: 'pattern', message: 'Email invalido' }
      ],
      cpf: [
        { type: 'required', message: 'É obrigatório informar o CPF/CNPJ!' },
        { type: 'minlength', message: 'Tem que ter no minimo 11 carecteres!' },
        { type: 'maxlength', message: 'Tem que ter no máximo 18 carecteres!' },
        { type: 'valCpf', message: 'CPF/CNPJ invalido!' },

      ],
      tel: [
        { type: 'required', message: 'É obrigatório informar o Telefone!' },
        { type: 'minlength', message: 'Tem que ter no minimo 14 carecteres!' },
        { type: 'maxlength', message: 'Tem que ter no máximo 15 carecteres!' },

      ],
      numRG: [
        { type: 'required', message: 'É obrigatório informar o RG!' },
        // { type: 'minlength', message: 'Tem que ter no minimo 9 carecteres!' },
        // { type: 'maxlength', message: 'Tem que ter no máximo 9 carecteres!' },

      ],

      cep: [
        { type: 'required', message: 'É obrigatório informar o CEP!' },
        { type: 'minlength', message: 'É obrigatório ter 8 caracteres!' },
        { type: 'maxlength', message: 'Tem que ter no máximo 8 carecteres!' }
      ],
      num: [
        { type: 'required', message: 'É obrigatório informar o Numero!' }

      ],

    };
  }
  async getEndereco(cep) {
    console.log(cep);
    cep = cep.replace(/[^\d]+/g, '');

    // tslint:disable-next-line: triple-equals
    if (cep.length == 8) {
      const loading = await this.overlay.loading();
      await this.cep.buscaCep(cep)
        .then((res: any) => {
          console.log(res);
          // tslint:disable-next-line: triple-equals
          if (res.erro == true) {
              loading.dismiss();
              this.overlay.toast({ message: 'CEP inválido! Verifica se digitou certo!'});

          } else {
            loading.dismiss();
            this.PlanoForm.controls.logradouro.setValue(res.logradouro);
            this.PlanoForm.controls.bairro.setValue(res.bairro);
            this.PlanoForm.controls.cidade.setValue(res.localidade);
            this.PlanoForm.controls.estado.setValue(res.uf);
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }

  }
 async confirmar() {
    this.displayConfirmar = false;
    this.displayCadastro = true;
    console.log('block');
    const slides = [

      {
        TituloText: 'Confiança',
        Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!',
        imageUrl: 'assets/img/help/help-1-4.png'
      }

    ];
    await this.openModal(WalkthroughModalPage, slides);
  }
  contrato() {
    this.navCtrl.navigateForward(['app', 'contrato', 'a', 'true']);
  }
}
