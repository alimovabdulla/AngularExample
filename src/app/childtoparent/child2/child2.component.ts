import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// Angular komponentini yaradırıq. Komponentin 'selector', 'standalone' və 'template' xüsusiyyətlərini müəyyən edirik.
@Component({
  selector: 'app-child2', // Komponenti istifadə edərkən HTML şablonunda bu adla istinad edəcəyik.
  standalone: true, // Komponentin 'standalone' olması, Angular moduluna bağlı olmadan işləyə biləcəyini göstərir.
  template: ``, // Komponentin şablonu burada boşdur. Şablon daxilində HTML yerləşdirilə bilər.
})
export class ChildComponent2 implements OnInit {
  // Komponenti 'OnInit' interfeysini həyata keçirərək hazırlayırıq.

  @Output() dataEvent: EventEmitter<any> = new EventEmitter(); // 'dataEvent' adlı bir 'EventEmitter' yaradırıq. Bu hadisə komponentdən məlumat göndərmək üçün istifadə olunur.

  ngOnInit(): void {
    // 'ngOnInit' Angular tərəfindən avtomatik olaraq çağırılan bir metoddur. Komponentin inicializasiyası üçün istifadə olunur.
    this.dataEvent.emit({ message: 'Salam Qaqaaa' }); // 'dataEvent' hadisəsini tetikləyir və 'message' obyekti ilə məlumat göndərir.
  }
}
