import { Component } from '@angular/core';
import { ChildComponent2 } from '../../childtoparent/child2/child2.component'; // ChildComponent2-nin importu

// ParentComponent2 komponentini yaradırıq
@Component({
  selector: 'app-parent2', // Bu komponenti istifadə edərkən HTML-də 'app-parent2' adını istifadə edəcəyik.
  standalone: true, // Komponentin 'standalone' olması, Angular moduluna bağlı olmadan işləyə biləcəyini göstərir.
  imports: [ChildComponent2], // Bu komponentin içində istifadə ediləcək digər komponentləri göstərir.
  template: `
    <app-child2 (dataEvent)="childEvent($event)"></app-child2>
    <!-- ChildComponent2 istifadə olunur və 'dataEvent' hadisəsi parent komponentə bağlanır. -->
    <p>{{ message }}</p>
    <!-- 'message' dəyişəni HTML-də göstərilir. -->
  `,
})
export class ParentComponent2 {
  message: string; // 'message' adlı bir dəyişən təyin edirik.

  // 'childEvent' metodu, 'dataEvent' hadisəsi baş verdikdə çağırılır.
  childEvent(data: any) {
    this.message = data.message; // Parent komponentdə 'message' dəyişənini child komponentdən gələn məlumatla yeniləyir.
  }
}
