import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
   
  notificacao;
  constructor( public popoverController: PopoverController) {
    this.notificacao = [
      {
        text: 'Teste Teste',
        tempo: ''        
      }
    ];
  }
  close() {
    this.popoverController.dismiss();
  }

}
