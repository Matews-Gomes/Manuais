import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuaisFinanceiroComponent } from './manuais-financeiro.component';

describe('ManuaisFinanceiroComponent', () => {
  let component: ManuaisFinanceiroComponent;
  let fixture: ComponentFixture<ManuaisFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuaisFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuaisFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
