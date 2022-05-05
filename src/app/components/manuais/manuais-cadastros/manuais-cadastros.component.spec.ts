import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuaisCadastrosComponent } from './manuais-cadastros.component';

describe('ManuaisCadastrosComponent', () => {
  let component: ManuaisCadastrosComponent;
  let fixture: ComponentFixture<ManuaisCadastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuaisCadastrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuaisCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
