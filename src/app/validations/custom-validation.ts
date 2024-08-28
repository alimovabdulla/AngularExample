import { AbstractControl, ValidationErrors } from '@angular/forms';

export function CustomValidations(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (value && value.includes('A')) {
    return { invalidCharacter: 'Value cannot contain the letter A' };
  }
  return null;
}
