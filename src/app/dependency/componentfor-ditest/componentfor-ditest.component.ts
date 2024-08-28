import { Component } from '@angular/core';
import { ClassDI } from '../classDI';

@Component({
  selector: 'app-componentfor-ditest',
  standalone: true,
  imports: [ ],
  providers: [ClassDI ],
  template: ``,
})
export class ComponentforDItestComponent {
  constructor(private serviceDI: ClassDI) {
    console.log(serviceDI.getProducts);
  }
}
