import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuaisPDVComponent } from './manuais-pdv.component';

describe('ManuaisPDVComponent', () => {
  let component: ManuaisPDVComponent;
  let fixture: ComponentFixture<ManuaisPDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuaisPDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuaisPDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
