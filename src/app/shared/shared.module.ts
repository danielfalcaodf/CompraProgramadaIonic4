import { PopoverComponent } from './components/popover/popover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AccordionListComponent } from './components/accordion-list/accordion-list.component';
import { BrMaskerModule } from 'br-mask';



@NgModule({
  declarations: [MenuToggleComponent, LogoutButtonComponent, AccordionListComponent, PopoverComponent],
  entryComponents: [
   PopoverComponent,
   
  ],
  imports: [IonicModule, BrMaskerModule ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    MenuToggleComponent,
    LogoutButtonComponent,
    AccordionListComponent,
    PopoverComponent,
    BrMaskerModule
  ]
})
export class SharedModule { }
