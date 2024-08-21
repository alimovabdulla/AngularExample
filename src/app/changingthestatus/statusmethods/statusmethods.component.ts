import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-statusmethods',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="frm" (ngSubmit)="onClick(frm.value)">
      <input type="text" placeholder="Name" formControlName="name" />
      <div formGroupName="exgroup">
        <input type="text" placeholder="Tel" formControlName="tel" />
        <input type="email" placeholder="Email" formControlName="email" />
      </div>
      <button type="submit">Submit</button>
      <!-- Submit düyməsini əlavə edin -->
    </form>
  `,
  styleUrls: ['./statusmethods.component.scss'],
})
export class StatusmethodsComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = this.formBuilder.group({
      name: [''],
      exgroup: this.formBuilder.group({
        tel: [''],
        email: [''],
      }),
    });
  }

  onClick(data: any) {
    const nameControl = this.frm.get('name');
    const telControl = this.frm.get('exgroup.tel');

    console.log('Name touched:', nameControl.touched);
    console.log('Name untouched:', !nameControl.touched);
    console.log('Name pristine:', nameControl.pristine);
    console.log('Name dirty:', nameControl.dirty);

    console.log('Tel disabled:', telControl.disabled);
    console.log('Tel enabled:', !telControl.disabled);

    // Bütün kontrolleri 'touched' olaraq işarələyir
    this.frm.markAllAsTouched();

    // Name kontrolunu 'touched' olaraq işarələyir
    this.frm.get('name')?.markAsTouched();

    // Name kontrolunu 'untouched' olaraq işarələyir
    this.frm.get('name')?.markAsUntouched();

    // Name kontrolunu 'pristine' olaraq işarələyir (dəyişilməyib)
    this.frm.get('name')?.markAsPristine();

    // Name kontrolunu 'dirty' olaraq işarələyir (dəyişib)
    this.frm.get('name')?.markAsDirty();

    // Tel kontrolunu deaktiv edir
    this.frm.get('exgroup.tel')?.disable();

    // Tel kontrolunu aktiv edir
    this.frm.get('exgroup.tel')?.enable();
  }
}
