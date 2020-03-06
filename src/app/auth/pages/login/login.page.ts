import { ValidateConfirmPassword } from './../../../validators/confirm-password';

import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { ValidaCpf } from 'src/app/validators/validcpf';
import { AuthProvider } from 'src/app/core/services/auth.types';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  @ViewChild('slideOpen', { static: false }) slideOpen: IonSlides;
  @ViewChild('slider', { static: false }) slider: IonSlides;
  @ViewChild('innerSlider', { static: false }) innerSlider: IonSlides;
  @ViewChild('slideCadastro', { static: false }) slideCadastro: IonSlides;
  public backgroundImage = '../../../assets/img/background/negativado_background.png';
  authProviders = AuthProvider;
  
  configs = {
    isSignin: true,
    action: 'Login',
    actionChange: 'Criar conta'
  };
  loginForm: FormGroup;
  registerForm: FormGroup;
  error_messages: any;
  registerError_messages: any;
  loader: any;
  slideIndex = 0;
  slideList = [
    {
      TituloText: 'Está negativado, com score baixo ou não tem dinheiro para dar entrada no seu carro?',
      Text: 'A Tony Veículos tem a solução pra você! Agora você pode programar a compra do carro dos seus sonhos com parcelas que cabem no seu bolso!'
    },
    {
      TituloText: 'Escolha seu plano',
      Text: 'Primeiro você escolhe o plano com a melhor parcela que cabe no seu bolso.'
    },
    {
      TituloText: 'Confiança',
      Text: 'Aqui você firmará um relacionamento de confiança com a Tony. Sim! Nós confiamos em você!'
    },
    {
      TituloText: 'Seu carro novo',
      Text: 'Após pagar as 12 primeiras parcelas em dia você já poderá levar seu carro pra casa! Não é incrível?'
    },
    {
      TituloText: 'Retirada',
      Text: 'Após retirar o carro na loja, você continuará pagando as 36 parcelas restantes do seu plano.'
    }
  ]
  slidesOpen = true;
  constructor(
    private authService: AuthService,  
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private overlayService: OverlayService,
    private navCtrl: NavController,
    private menuCtrl: MenuController) {
    this.buildForm();
  }
  buildForm() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      // cpf: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14),ValidaCpf, Validators.pattern('[0-9\.\-]+$')]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],

    });
    this.error_messages =
      {

        'email': [
          { type: 'required', message: 'É obrigatório informar o Email!' },
          { type: 'minlength', message: 'Isso não é Email' },
          { type: 'pattern', message: 'Email invalido' }
        ],
        'password': [
          { type: 'required', message: 'É obrigatório informar a Senha!' },
          { type: 'minlength', message: 'Tem que ter no minimo 6 carecteres!' },
          { type: 'maxlength', message: 'Tem que ter no minimo 16 carecteres!' }
        ]



      }
    this.loginForm.controls.email.setValue("123@123.com");
    this.loginForm.controls.password.setValue('123456');
    this.registerForm = this.fb.group({
      nome: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.pattern("[A-Za-zÀ-ú ']*")
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
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16)])),
      // tslint:disable-next-line: max-line-length
      confirmPassword: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16), ValidateConfirmPassword.password])),


    });


    this.registerError_messages =
      {
        'nome': [
          { type: 'required', message: 'É obrigatório informar o Nome Completo!' },
          { type: 'minlength', message: 'É obrigatório ter 10 caracteres!' },
          { type: 'pattern', message: 'Apenas letras' }
        ],
        'email': [
          { type: 'required', message: 'É obrigatório informar o Email!' },
          { type: 'minlength', message: 'Isso não é Email' },
          { type: 'pattern', message: 'Email invalido' }
        ],
        'cpf': [
          { type: 'required', message: 'É obrigatório informar o CPF/CNPJ!' },
          { type: 'minlength', message: 'Tem que ter no minimo 11 carecteres!' },
          { type: 'maxlength', message: 'Tem que ter no máximo 18 carecteres!' },
          { type: 'valCpf', message: 'CPF/CNPJ invalido!' },
        ],
        'tel': [
          { type: 'required', message: 'É obrigatório informar o Telefone!' },
          { type: 'minlength', message: 'Tem que ter no minimo 14 carecteres!' },
          { type: 'maxlength', message: 'Tem que ter no máximo 15 carecteres!' },

        ],
        'password': [
          { type: 'required', message: 'É obrigatório informar o Senha!' },
          { type: 'minlength', message: 'Tem que ter no minimo 6 carecteres!' },
          { type: 'maxlength', message: 'Tem que ter no máximo 16 carecteres!' }

        ],
        'confirmPassword': [
          { type: 'required', message: 'É obrigatório confirmar a Senha!' },
          { type: 'minlength', message: 'Tem que ter no minimo 6 carecteres!' },
          { type: 'maxlength', message: 'Tem que ter no máximo 16 carecteres!' },
          { type: 'password', message: 'Os campos de senhas coincidem ' },
        ],


      }
  }
 
  async LoginComEmail(provider: AuthProvider): Promise<void>{
    const loading = await this.overlayService.loading();
    try{
      const credentials  = await this.authService.authenticate({
        isSignIn: true,
        user: this.loginForm.value,
        provider
      })
      console.log('pronto: ', credentials);
      this.navCtrl.navigateForward(  this.route.snapshot.queryParamMap.get('redirect') ||  '/app');
      if (! await this.menuCtrl.isEnabled("main-menu")) {
        console.log('teste')
        this.menuCtrl.enable(true, "main-menu");
     }  
    }
    catch(e) {
      console.log("Auth error: ", e);
      await  this.overlayService.toast({
        message: e.message
      })
    }
    finally{
      loading.dismiss();
    }
  }
  async cadastrarUsuario(provider: AuthProvider): Promise<void>{
    const loading = await this.overlayService.loading();
    try{
      const credentials  = await this.authService.authenticate({
        isSignIn: false,
        user: this.registerForm.value,
        provider
      })
      console.log('pronto: ', credentials);
      this.navCtrl.navigateForward(  this.route.snapshot.queryParamMap.get('redirect') ||  '/app');  
      if (! await this.menuCtrl.isEnabled("main-menu")) {
        console.log('teste')
        this.menuCtrl.enable(true, "main-menu");
     }  
    }
    catch(e) {
      console.log("Auth error: ", e);
      await  this.overlayService.toast({
        message: e.message
      })
    }
    finally{
      loading.dismiss();
    }
  }

async loginComFB()
  {
     await this.authService.fbLogin()   
      .then(res => {
        this.navCtrl.navigateForward(  this.route.snapshot.queryParamMap.get('redirect') ||  '/app');  
        if (!this.menuCtrl.isEnabled("main-menu")) {
          console.log('teste')
          this.menuCtrl.enable(true, "main-menu");
       }
      
    })
    .catch(e => {
      console.log(e);
    });
  }

  // slides
  async onSlideChanged(): Promise<void> {
    await this.slideOpen.getActiveIndex().then(index => {
      this.slideIndex = index;
    });
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  goToApp() {
    console.log('Go to App clicked')
      this.slideIndex = 6;
    this.slidesOpen = false;
  }
  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }
  slideNext() {
    this.innerSlider.slideNext();
  }


  slidePrevious() {
    this.innerSlider.slidePrev();
  }
  slideCadastroNext() {
    this.slideCadastro.slideNext();
  }
  slideCadastroBack() {
    this.slideCadastro.slidePrev()
  }
}

