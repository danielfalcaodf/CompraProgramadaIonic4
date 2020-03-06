
import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: {url: string, direction: string, icon: string, text: string}[];
  user: firebase.User;
  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private events: Events
  ) {
    this.initializeApp();
  }

 async initializeApp() {
  this.pages = [
    {url: '/app', direction: 'back', icon: 'home', text: 'Dashboard'},
    {url: '/app/planos/false', direction: 'forward', icon: 'cart', text: 'Planos'},
    {url: '/app/pagamentos', direction: 'forward', icon: 'pie', text: 'Meus Pagamentos'},
    {url: '/app/extrato', direction: 'forward', icon: 'document', text: 'Extrato'}
  ];
    // await this.listenEvents();
    await this.authService.authState$.subscribe(user => (this.user = user));
    await this.userON();
    await this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  private async listenEvents()
  {
   
   
   await this.events.subscribe("menu", response => {
      
     
      if(response == 1)
      {
        this.pages = [
          {url: '/app', direction: 'back', icon: 'home', text: 'Dashboard'},
          {url: '/app/planos/false', direction: 'forward', icon: 'cart', text: 'Planos'},
          {url: '/app/pagamentos', direction: 'forward', icon: 'pie', text: 'Meus Pagamentos'},
          {url: '/app/extrato', direction: 'forward', icon: 'document', text: 'Extrato'}
        ];
      }
      else 
      {
        this.pages = [
         
          {url: '/app/planos/true', direction: 'forward', icon: 'cart', text: 'Planos'},
      
        ];
      }
     
    });

  }
  async  userON()
  {

    await this.authService.authState$.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
        this.router.navigate(['app'])
      } else {
        console.log('user not logged in');
        this.router.navigate(['login'])
      }
    });
   
  }
  
}
