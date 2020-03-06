import { OverlayService } from './../../../core/services/overlay.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Component, OnInit } from '@angular/core';
import { ExtratoStatus } from '../../models/extratostatus';
import { PopoverController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { PopoverComponent } from 'src/app/shared/components/popover/popover.component';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
})
export class ExtratoPage implements OnInit {
  extratoStatus: Array<ExtratoStatus>;
  radio = [
    { text: 'Este Mês', check: true },
    { text: 'Ultimo Mês', check: false },
    { text: 'Ultimos 3 Meses', check: false },
    { text: 'Ultimos 6 Meses', check: false },
    { text: 'Outro Periodo', check: false }
  ];
  today: any;
  datefinal: any;
  dataDisplay = false;
  public list: any = [];
  rotacao = ' rotate(0);';
   keyboard: Keyboard;
  constructor( private popoverController: PopoverController, private over: OverlayService, private datePicker: DatePicker
     ) {
    this.extratoStatus = [{
      compraText: 'Compra Progamada',
      parcelaInicial: 1,
      parcelaFinal: 48,
      valorParcela: 200,
      dataVecimento: '15/06/2019',
      dataPagemento: '13/06/2019',
      pgStatus: 'pg',
      icon: 'arrow-round-down',
      btn: 'string',
      color: 'success'
    },
    {
      compraText: 'Compra Progamada',
      parcelaInicial: 1,
      parcelaFinal: 48,
      valorParcela: 200,
      dataVecimento: '15/06/2019',
      dataPagemento: '13/06/2019',
      pgStatus: 'pg',
      icon: 'arrow-round-down',
      btn: 'string',
      color: 'success'
    }

    ];

    this.list = [
      { expanded: false }
    ];
    this.EscolhaData({ text: 'Este Mês' });
  }

  ngOnInit() {
  }
  EscolhaData(radio) {
    this.dataDisplay = false;

    const date = new Date();
    const dateFinal = date.toLocaleDateString();
    console.log(radio);
    // tslint:disable-next-line: triple-equals
    if (radio.text == 'Este Mês') {

      const primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);

      const ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      const dateInicial = primeiroDia.toLocaleDateString();
      // tslint:disable-next-line: no-shadowed-variable
      const dateFinal = ultimoDia.toLocaleDateString();
      this.over.toast({ message: 'Data Inicial: ' + dateInicial + ' Data final: ' + dateFinal });



    // tslint:disable-next-line: triple-equals
    } else if (radio.text == 'Ultimo Mês') {
      const dateInicial = this.mesAnterior(-1).toLocaleDateString();

      this.over.toast({ message: 'Data Inicial: ' + dateInicial + ' Data final: ' + dateFinal });
    // tslint:disable-next-line: triple-equals
    } else if (radio.text == 'Ultimos 3 Meses') {
      const dateInicial = this.mesAnterior(-3).toLocaleDateString();

      this.over.toast({ message: 'Data Inicial: ' + dateInicial + ' Data final: ' + dateFinal });
    // tslint:disable-next-line: triple-equals
    } else if (radio.text == 'Ultimos 6 Meses') {
      const dateInicial = this.mesAnterior(-6).toLocaleDateString();


      this.over.toast({ message: 'Data Inicial: ' + dateInicial + ' Data final: ' + dateFinal });
    } else {
      this.today = null;
      this.datefinal = null;
      this.dataDisplay = true;

    }
  }
  mesAnterior(diff) {
    const d = new Date();


    d.setMonth(d.getMonth() + diff);

    return d;
  }
  expandItem(item): void {

    if (item.expanded) {
      item.expanded = false;
    } else {
      this.list.map(listItem => {
        // tslint:disable-next-line: triple-equals
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
          this.rotacao = 'rotate(90deg);';
        } else {
          listItem.expanded = false;
          this.rotacao = 'rotate(0);';
        }
        return listItem;
      });
    }
  }
  openDatepicker() {
    this.keyboard.hide();
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        this.today = date.toLocaleDateString();
        this.InicialFimData();
      },
      err => this.over.toast({message: 'Error occurred while getting date: ' + err})
    );
  }
  openDateFinal() {
    this.keyboard.hide();
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        this.datefinal = date.toLocaleDateString();
        this.InicialFimData();
      },
      err => this.over.toast({message: 'Error occurred while getting date: ' + err})
    );
  }
  InicialFimData() {
    if (this.today != null && this.datefinal != null) {
      this.over.toast({message: 'Data Inicial: ' + this.today + ' Data Final: ' + this.datefinal});
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
