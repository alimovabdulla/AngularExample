import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Direktiv tərifi
@Directive({
  selector: '[appStructural]', // Direktivin HTML-də necə istifadə olunacağını təyin edir
  standalone: true, // Bu direktivin müstəqil olduğunu göstərir
})
export class StructuralDirective {
  // Konstruktor - TemplateRef və ViewContainerRef obyektlərini alır
  constructor(
    private templateRef: TemplateRef<any>, // Şablonun təmsilçisi
    private viewContainer: ViewContainerRef // Şablonların yerləşdirildiyi konteyner
  ) {}

  // @Input dekoratoru ilə bir giriş xüsusiyyəti təyin edir
  @Input() set appStructural(value: number) {
    // Giriş dəyəri qədər təkrarlanan şablon yaradılır
    for (let i = 0; i < value; i++)
      this.viewContainer.createEmbeddedView(this.templateRef); // Şablon yaradılır və konteynerə əlavə olunur
  }
}
