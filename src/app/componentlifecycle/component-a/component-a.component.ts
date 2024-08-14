import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="text" [(ngModel)]="data" /><br />
    <ng-content></ng-content>
  `,
  styleUrl: './component-a.component.scss',
})
export class ComponentAComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: string = '';
  // 1. ngOnChanges: Komponentə daxil olan @Input dəyişənlərinin dəyəri dəyişəndə işə düşür.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. OnChanges Works');
  }

  // 2. ngOnInit: Komponent yaradılıb DOM-a yerləşdirildikdən sonra bir dəfə işə düşür.
  ngOnInit(): void {
    console.log('2. OnInit Works');
  }

  // 3. ngDoCheck: Angular’ın hər bir dəyişiklik aşkarlama dövründə (change detection cycle) işə düşür. OnChanges ilə yanaşı işə düşür və əlavə yoxlamalar aparmaq üçün istifadə olunur.
  ngDoCheck(): void {
    console.log('3. DoCheck Works');
  }

  // 4. ngAfterContentInit: Komponentin məzmunu (content) birinci dəfə DOM-a yerləşdirildikdən sonra işə düşür.
  ngAfterContentInit(): void {
    console.log('4. AfterContentInit Works');
  }

  // 5. ngAfterContentChecked: Komponentin məzmununda hər bir dəyişiklik aşkarlanandan sonra işə düşür.
  ngAfterContentChecked(): void {
    console.log('5. AfterContentChecked Works');
  }

  // 6. ngAfterViewInit: Komponentin görünüşü (view) birinci dəfə DOM-a yerləşdirildikdən sonra işə düşür. Buraya şablonlar (templates) və uşaq komponentləri daxildir.
  ngAfterViewInit(): void {
    console.log('6. AfterViewInit Works');
  }

  // 7. ngAfterViewChecked: Komponentin görünüşündə (view) hər bir dəyişiklik aşkarlanandan sonra işə düşür.
  ngAfterViewChecked(): void {
    console.log('7. AfterViewChecked Works');
  }

  // 8. ngOnDestroy: Komponent DOM-dan silinməzdən əvvəl işə düşür. Təmizlik işləri (clean-up) aparmaq üçün istifadə olunur.
  ngOnDestroy(): void {
    console.log('8. OnDestroy Works');
  }
}
