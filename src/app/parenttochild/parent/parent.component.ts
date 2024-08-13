// Anguların əsas modullarını idxal edir. 'Component' dekoratoru burada istifadə olunur.
import { Component } from '@angular/core';
// 'ChildComponent' komponentini idxal edir. Bu, valideyn komponentdə istifadə ediləcək.
import { ChildComponent } from '../child/child.component';

// Component dekoratoru ilə valideyn komponentin necə olacağını müəyyən edirik.
@Component({
  // Komponentin selektorunu təyin edir. Bu selektor HTML-də komponenti çağırmaq üçün istifadə olunur.
  selector: 'app-parent',
  // Bu komponentin müstəqil olduğunu (standalone) göstərir və 'ChildComponent' komponentini idxal edir.
  standalone: true,
  imports: [ChildComponent],
  // Komponentin şablonunu təyin edir. Burada 'app-child' komponentini istifadə edirik.
  // 'parentData' xüsusiyyətinin dəyərini 'childProperty' atributuna keçirik.
  template: ` <app-child [childProperty]="parentData"></app-child> `,
})
// Bu, 'ParentComponent' sinfinin təsviri.
export class ParentComponent {
  // Valideyn komponentdə 'parentData' adlı bir xüsusiyyət təyin edirik.
  // Bu dəyər 'ChildComponent'ə 'childProperty' vasitəsilə ötürüləcək.
  parentData: string = 'Salam, Uşaq Komponenti!';
}
