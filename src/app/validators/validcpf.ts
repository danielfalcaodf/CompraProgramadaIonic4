
import { FormControl } from '@angular/forms';

export class ValidaCpf {
    static valCpf(control: FormControl) {

        var cpf: string;
        cpf = control.value;
        if (control.value != null) {
            if (control.value.length <= 14) {
                var cpfSP = control.value.split('.');
                if (cpfSP[2] != null) {
                    var cpfST = cpfSP[2].split("-");

                    console.log(cpfSP, cpfST);
                    cpf = cpfSP[0] + cpfSP[1] + cpfST[0] + cpfST[1];

                }

                if (cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' || cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' || cpf == '88888888888' || cpf == '99999999999') {
                    return null;
                }
                let numero: number = 0;
                let caracter: string = '';
                let numeros: string = '0123456789';
                let j: number = 10;
                let somatorio: number = 0;
                let resto: number = 0;
                let digito1: number = 0;
                let digito2: number = 0;
                let cpfAux: string = '';
                cpfAux = cpf.substring(0, 9);
                for (let i: number = 0; i < 9; i++) {
                    caracter = cpfAux.charAt(i);
                    if (numeros.search(caracter) == -1) {
                        return { valCpf: true };
                    }
                    numero = Number(caracter);
                    somatorio = somatorio + (numero * j);
                    j--;
                }
                resto = somatorio % 11;
                digito1 = 11 - resto;
                if (digito1 > 9) {
                    digito1 = 0;
                }
                j = 11;
                somatorio = 0;
                cpfAux = cpfAux + digito1;
                for (let i: number = 0; i < 10; i++) {
                    caracter = cpfAux.charAt(i);
                    numero = Number(caracter);
                    somatorio = somatorio + (numero * j);
                    j--;
                }
                resto = somatorio % 11;
                digito2 = 11 - resto;
                if (digito2 > 9) {
                    digito2 = 0;
                }
                cpfAux = cpfAux + digito2;
                if (cpf != cpfAux) {
                    return { valCpf: true };
                }
                else {

                    return null;
                }

            }
            else {
                cpf = cpf.replace(/[^\d]+/g, '');
                console.log(cpf);
                if (cpf == '') return { valCpf: true };

                if (cpf.length != 14)
                    return { valCpf: true };


                if (cpf == "00000000000000" ||
                    cpf == "11111111111111" ||
                    cpf == "22222222222222" ||
                    cpf == "33333333333333" ||
                    cpf == "44444444444444" ||
                    cpf == "55555555555555" ||
                    cpf == "66666666666666" ||
                    cpf == "77777777777777" ||
                    cpf == "88888888888888" ||
                    cpf == "99999999999999")
                    return { valCpf: true };


                var tamanho = cpf.length - 2;
                var numeros = cpf.substring(0, tamanho);
                var digitos = cpf.substring(tamanho);
                var soma = 0;
                var pos = tamanho - 7;
                for (let i = tamanho; i >= 1; i--) {
                    let num = numeros.charAt(tamanho - i);
                    soma += parseInt(num) * pos--;
                    if (pos < 2)
                        pos = 9;
                }
                var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                let dig = digitos.charAt(0);
                if (resultado != parseInt(dig)) return { valCpf: true };
                tamanho = tamanho + 1;
                numeros = cpf.substring(0, tamanho);
                soma = 0;
                pos = tamanho - 7;
                for (let i = tamanho; i >= 1; i--) {
                    let num = numeros.charAt(tamanho - i);
                    soma += parseInt(num) * pos--;
                    if (pos < 2)
                        pos = 9;
                }
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                let dig2 = digitos.charAt(1);
                if (resultado != parseInt(dig2))
                    return { valCpf: true };

                return null;

            }
        }

    }


}
