import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { User, AuthProvider, AuthOptions } from './auth.types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseAuth } from '@angular/fire';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;

  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
  constructor(private afAuth: AngularFireAuth, public fb: Facebook) {
    this.authState$ = this.afAuth.authState;
    fb.getLoginStatus()
    .then(res => {
      console.log(res.status);
      if (res.status === 'connect') {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log(e));
   }
get isAuthenticated(): Observable<boolean>
{
  return this.authState$.pipe(map(user => user !== null ))
}

  authenticate({isSignIn, provider, user}: AuthOptions): Promise<auth.UserCredential>
  {
    let operation: Promise<auth.UserCredential>;

    if (provider !== AuthProvider.Email) {
      operation = this.loginPopup(provider);
    }
    else{
      operation = isSignIn ? this.loginComEmail(user) : this.criarLoginComEmail(user);
    }
    return operation;
  }
logout(): Promise<void>
{
  return this.afAuth.auth.signOut();
}
  private loginComEmail({email, password}: User): Promise<auth.UserCredential>
  {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  private criarLoginComEmail({email, password, nome}: User): Promise<auth.UserCredential>
  {
    
        return this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(credential => 
          credential.user.updateProfile({displayName: nome, photoURL: '../../assets/img/avatar/marty-avatar.png'})
          .then(() => credential )
        );
  }
  private loginPopup(provider: AuthProvider): Promise<auth.UserCredential>
  {
      let signInprovider = null

      switch (provider)
      {
        case AuthProvider.Facebook:
          signInprovider = new auth.FacebookAuthProvider();
          break;
      
        default:
          break;
      }
      return this.fbLogin();
  }
  fbLogin() {
  return new Promise<auth.UserCredential>((resolve, reject) => {
    // if (this.platform.is('cordova')) {
      let permissions = new Array();
      permissions = ["public_profile", "email"];
      this.fb.login(permissions).then(success => {
    console.log("facebook Success response1->", success);
    this.fb.api("/me?fields=id,name,email,gender,first_name,last_name", permissions).then(user => {
      // tslint:disable-next-line: prefer-const
      var provider = firebase.auth.FacebookAuthProvider.credential(
        success.authResponse.accessToken
      );
      firebase.auth().signInWithCredential(provider)
      .then(user => {
        resolve() 
      }).catch(error => {
        // console.log("fb Error1" + JSON.stringify(error));     
        reject(error.message)  
      });
    }),
      // tslint:disable-next-line: no-unused-expression
      (      error: any) => {
        reject(error) ;
      };
  },
   error => {
    reject(error) ;
    });
    // }
  //   else{
  //     this.afAuth.auth
  //     .signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //    .then((user) => {
  //       resolve()
  //    })
  //  }
 })
  }
  
}
 

