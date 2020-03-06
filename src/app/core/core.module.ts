import { Facebook } from '@ionic-native/facebook/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from  '@angular/common/http';
import { CepService } from './services/cep.service';
import { CommonModule } from '@angular/common';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';




@NgModule({

  imports: [
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    
   
  ],
  exports: [
    BrowserModule,
    CommonModule,
    IonicModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CepService,
    Keyboard,
    DatePicker,
    Clipboard,
    File,
    FileTransfer,
    FileOpener,
    Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
})
export class CoreModule { }
