import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuaisFranquiasComponent } from './manuais-franquias.component';

describe('ManuaisFranquiasComponent', () => {
  let component: ManuaisFranquiasComponent;
  let fixture: ComponentFixture<ManuaisFranquiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuaisFranquiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuaisFranquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
