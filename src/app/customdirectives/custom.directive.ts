import { Directive, ElementRef, OnInit } from '@angular/core';

// 'appCustom' adlı xüsusi bir direktiv yaradılır.
// Bu direktiv HTML elementlərinə tətbiq edilə bilər.
@Directive({
  selector: '[appCustom]', // Bu direktivi istifadə etmək üçün HTML-də [appCustom] atributunu istifadə etməlisiniz.
  standalone: true, // Bu direktivin müstəqil olduğunu göstərir; yəni, bir modul içində olmadan istifadə oluna bilər.
})
export class CustomDirective implements OnInit {
  // ElementRef, direktivin tətbiq ediləcəyi DOM elementinə giriş təmin edir.
  constructor(private element: ElementRef) {}

  // Direktiv tətbiq edildikdən sonra işə düşəcək metod.
  ngOnInit(): void {
    // Direktivin tətbiq edildiyi elementin arxa fon rəngini qırmızıya dəyişir.
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
