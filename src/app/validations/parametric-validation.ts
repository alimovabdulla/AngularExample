import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ParametrikValidation(forbiddenChar: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;

    if (value) {
      // İlk 3 karakteri büyük harflere çevir
      value = value.slice(0, 3).toUpperCase() + value.slice(3);

      // Eğer parametr olarak verilen karakter varsa, hata döndür
      if (value.includes(forbiddenChar)) {
        return {
          invalidCharacter: `Value cannot contain the letter ${forbiddenChar}`,
        };
      }
    }

    return null;
  };
}
