import { AbstractControl, Validators } from '@angular/forms';

export class GenericValidator {
  constructor() { }

  static CPF(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    const cpf = String(control.value).replace(/\D/g, '');
    if (cpf.length !== 11) {
      return { cpf: true };
    }

    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return { cpf: true };
    }

    let soma = 0;
    for (let i = 1; i <= 9; i += 1) {
      soma = soma + parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10), 10)) {
      return { cpf: true };
    }

    soma = 0;
    for (let i = 1; i <= 10; i += 1) {
      soma = soma + parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto === parseInt(cpf.substring(10, 11), 10)) {
      return null;
    }
    return { cpf: true };
  }
  static ALPHA_NUMERIC(control: AbstractControl) {
    const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_]*$/;
    const ALPHA_NUMERIC_VALIDATION_ERROR = { pattern: true }
    return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
  }
  static CNPJ(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    const cnpj = String(control.value).replace(/\D/g, '');

    if (cnpj.length !== 14) {
      return { cnpj: true };
    }
    if (
      !cnpj ||
      cnpj.length != 14 ||
      cnpj == '00000000000000' ||
      cnpj == '11111111111111' ||
      cnpj == '22222222222222' ||
      cnpj == '33333333333333' ||
      cnpj == '44444444444444' ||
      cnpj == '55555555555555' ||
      cnpj == '66666666666666' ||
      cnpj == '77777777777777' ||
      cnpj == '88888888888888' ||
      cnpj == '99999999999999'
    ) {
      return { cnpj: true };
    }
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += Number.parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    let resultado = (soma % 11 < 2 ? 0 : 11 - (soma % 11)).toString();
    if (resultado != digitos.charAt(0)) {
      return { cnpj: true };
    }
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += Number.parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    resultado = (soma % 11 < 2 ? 0 : 11 - (soma % 11)).toString();
    if (resultado != digitos.charAt(1)) {
      return { cnpj: true };
    }
    return null;
  }
  static EMAIL() {
    return (control: AbstractControl): Validators => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(control.value).toLowerCase())) {
        return null;
      }
      return { emailInvalid: true };
    };
  }
}
