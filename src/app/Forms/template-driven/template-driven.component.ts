import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven', // Komponentin seçicisi (selector), HTML-də istifadə ediləcək adıdır
  standalone: true, // Bu komponentin müstəqil olduğunu göstərir, yəni başqa modullara ehtiyacı yoxdur
  imports: [FormsModule], // Bu komponentin içərisində FormsModule istifadə edirik, bu da formaları idarə etmək üçün lazımdır
  template: `
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
      <!-- Formun başlama nöqtəsi, #frm dəyişəni ilə formu təyin edirik -->
      <input type="text" placeholder="Name" name="name" ngModel /><br />
      <!-- Ad sahəsi, ngModel ilə Angular-a bağlıdır -->
      <input type="text" placeholder="Surname" name="surname" ngModel /><br />
      <!-- Soyad sahəsi -->
      <input type="email" placeholder="Email" name="email" ngModel /><br />
      <!-- Email sahəsi -->
      <input type="tel" placeholder="Tel" name="tel" ngModel /><br />
      <!-- Telefon nömrəsi sahəsi -->
      <div ngModelGroup="adress">
        <!-- Adress qrupu, bir neçə sahəni birləşdirmək üçün istifadə olunur -->
        <input type="text" name="country" placeholder="Country" /><br />
        <!-- Ölkə sahəsi -->
        <input type="text" name="city" placeholder="City" /><br />
        <!-- Şəhər sahəsi -->
        <input type="text" name="address" placeholder="Address" /><br />
        <!-- Ünvan sahəsi -->
      </div>
      <button type="submit">Send</button>
      <!-- Göndər düyməsi -->
    </form>
  `,
})
export class TemplateDrivenComponent {
  @ViewChild('frm', { static: true }) frm: NgForm; // Formu DOM-dan almaq üçün ViewChild istifadə edilir

  onSubmit(data) {
    // Formu göndərdikdən sonra işləyəcək funksiya
    console.log(`Value : ${this.frm.value}`); // Formun daxil edilən dəyərlərini göstərir
    console.log(`Valid : ${this.frm.valid}`); // Formun düzgünlüyünü (validliyini) göstərir
    console.log(`Touched : ${this.frm.touched}`); // Formun hər hansı bir sahəsinin toxunulub-toxunulmadığını göstərir
    console.log(`Submitted : ${this.frm.submitted}`); // Formun göndərilib-göndərilmədiyini göstərir

    console.log(data); // Göndərilən form məlumatlarını göstərir
  }
}
