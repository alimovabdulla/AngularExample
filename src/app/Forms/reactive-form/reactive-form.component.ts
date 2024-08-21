import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { markAsUntransferable } from 'node:worker_threads';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <!-- Form qrupunu və göndərmə eventini birləşdirir -->
    <form [formGroup]="frm" (ngSubmit)="onSubmit(frm.value)">
      <!-- Ad inputu üçün form kontrolu -->
      <input type="text" placeholder="Name" formControlName="name" /><br />

      <!-- Soyad inputu üçün form kontrolu -->
      <input
        type="text"
        placeholder="Surname"
        formControlName="surname"
      /><br />

      <!-- Email inputu üçün form kontrolu -->
      <input type="text" placeholder="Email" formControlName="email" /><br />

      <!-- Telefon nömrəsi inputu üçün form kontrolu -->
      <input type="text" placeholder="Tel" formControlName="tel" /><br />

      <!-- "address" adlı alt qrup -->
      <div formGroupName="address">
        <!-- Ölkə inputu üçün form kontrolu -->
        <input
          type="text"
          placeholder="Country"
          formControlName="country"
        /><br />

        <!-- Şəhər inputu üçün form kontrolu -->
        <input type="text" placeholder="City" formControlName="city" /><br />

        <!-- Ünvan inputu üçün form kontrolu -->
        <input type="text" placeholder="Address" formControlName="address" />
      </div>

      <!-- Formu göndərmək üçün düymə -->
      <button>Send</button>
    </form>
    <!-- Formun etibarlı olub olmadığını göstərir (true/false) -->
    {{ null }}
  `,
})
export class ReactiveFormComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ['', Validators.required],
      surname: [''],
      email: [''],
      tel: [''],
      address: formBuilder.group({
        country: [''],
        city: [''],
        address: [''],
      }),
    });
  }
  onSubmit(data) {
    console.log(data);
     this.frm.get('name').markAllAsTouched();
     console.log(this.frm.controls['name'].markAllAsTouched);
     
  }
  
}
