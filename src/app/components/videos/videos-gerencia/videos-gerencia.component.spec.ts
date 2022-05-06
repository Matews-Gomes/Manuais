import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGerenciaComponent } from './videos-gerencia.component';

describe('VideosGerenciaComponent', () => {
  let component: VideosGerenciaComponent;
  let fixture: ComponentFixture<VideosGerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosGerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
