import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private API_URL = 'http://viacep.com.br/ws/';

  constructor(
      private http: HttpClient
  ){
  }

  buscaCep(cep: string) {
      return new Promise((resolve, reject) => {

          this.http.get(this.API_URL +cep+"/json/")
          .subscribe((result: any) => {
           
              resolve(result);
          },
          (error) => {
              reject(error);
          });
      });
  }

}