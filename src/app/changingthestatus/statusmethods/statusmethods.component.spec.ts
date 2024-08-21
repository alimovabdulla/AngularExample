import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusmethodsComponent } from './statusmethods.component';

describe('StatusmethodsComponent', () => {
  let component: StatusmethodsComponent;
  let fixture: ComponentFixture<StatusmethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusmethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
