import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit(frm.value)">
      <input type="text " placeholder="Name" formControlName="name" /><br />
      <input
        type="text "
        placeholder="Surname"
        formControlName="surname"
      /><br />
      <input type="text " placeholder="Email" formControlName="email" /><br />
      <input type="text " placeholder="Tel" formControlName="tel" /><br />
      <div formGroupName="address">
        <input
          type="text"
          placeholder="County"
          formControlName="country"
        /><br />
        <input type="text" placeholder="City" formControlName="city" /><br />
        <input type="text" placeholder="Address" formControlName="address" />
      </div>
      <button>Send</button>
    </form>
    {{frm.valid}}
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
  }
}
