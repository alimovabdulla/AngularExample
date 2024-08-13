// Angular-in `Pipe` və `PipeTransform` siniflərini import edirik.
// `Pipe` dekoratoru pipe siniflərini yaratmaq üçün istifadə olunur.
// `PipeTransform` interfeysi isə transformasiya metodunu təmin edir.
import { Pipe, PipeTransform } from '@angular/core';

// `@Pipe` dekoratoru ilə pipe sinifi yaradılır.
// `name` xüsusiyyəti bu pipe-in adını təyin edir və şablonlarda istifadə edilir.
// `standalone: true` xüsusiyyəti isə bu pipe-in müstəqil olduğunu göstərir, yəni
// onu modulda qeydiyyatdan keçirməyə ehtiyac yoxdur.
@Pipe({
  name: 'mypipe', // Bu ad şablonlarda bu pipe-i tanıdacaq
  standalone: true, // Bu pipe-in müstəqil olduğunu göstərir
})

// `MypipePipe` sinifi `PipeTransform` interfeysini implement edir.
// `PipeTransform` interfeysi transformasiya metodunu təmin etməyə məcbur edir.
export class MypipePipe implements PipeTransform {
  // `transform` metodu daxil olan dəyəri qəbul edir və onu dəyişdirir.
  // Bu metodun daxil olan `value` dəyərini dəyişdirərək geri qaytarır.
  // `...args` dəyişən parametrli siyahıdır və digər arqumentləri qəbul edir.
  transform(value: any, ...args: unknown[]): any {
    // `value` dəyərini böyük hərflərə çevirərək geri qaytarır.
    return value.toUpperCase();
  }
}
