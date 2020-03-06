import { Component, OnInit } from '@angular/core';
import { PagamentoStatus } from '../../models/pagamentostatus.model';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {
  btnBoleto = false;
  btnCartao = true;
  btnDisplay = true;
  load = false;
  cardDisplay = false;
  DadosPG = {} as PagamentoStatus;
  constructor(private clipboard: Clipboard, private overlay: OverlayService) { }

  ngOnInit() {
  }
  pgBoleto() {
    this.btnBoleto = true;
    this.btnCartao = true;
    this.btnDisplay = false;
    this.load = true;
    setTimeout(() => {
    this.load = false;
    this.cardDisplay = true;
   }, 2000);
    }
    CopiarNumero(cod) {
    this.clipboard.copy(cod);
    this.clipboard.paste().then(
      (resolve: string) => {
        this.overlay.toast({message: 'Copiado com Sucesso!'});
       },
       (reject: string) => {
         alert('Error: ' + reject);
       }
     );
  }
  pgCartao() {
    console.log('aa');
  }
}
