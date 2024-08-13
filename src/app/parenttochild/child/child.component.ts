// Anguların əsas modullarını idxal edir. 'Component' və 'Input' dekoratorları buradan istifadə olunur.
import { Component, Input } from '@angular/core';

// Component dekoratoru ilə komponentin necə olacağını müəyyən edirik.
@Component({
  // Komponentin selektorunu təyin edir. Bu selektor HTML-də komponenti çağırmaq üçün istifadə olunur.
  selector: 'app-child',
  // Bu komponentin müstəqil olduğunu (standalone) və heç bir əlavə modula ehtiyacı olmadığını göstərir.
  standalone: true,
  // İdxal edilən modullar varsa, burada qeyd olunacaq, amma bu komponentin idxal etməyə ehtiyacı yoxdur.
  imports: [],
  // Komponentin şablonunu təyin edir. Burada sadə bir <p> elementi istifadə olunur.
  template: ` <p>{{ childProperty }}</p> `,
})
// Bu, 'ChildComponent' sinfinin təsviri.
// 'Input' dekoratoru ilə təyin olunan 'childProperty' xüsusiyyəti valideyn komponentdən bu komponentə verilə bilər.
export class ChildComponent {
  // 'Input' dekoratoru ilə 'childProperty' xüsusiyyəti valideyn komponentdən bu komponentə ötürülə bilər.
  @Input() childProperty: string;
}
