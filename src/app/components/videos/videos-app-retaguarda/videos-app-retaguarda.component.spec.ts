import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAppRetaguardaComponent } from './videos-app-retaguarda.component';

describe('VideosAppRetaguardaComponent', () => {
  let component: VideosAppRetaguardaComponent;
  let fixture: ComponentFixture<VideosAppRetaguardaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosAppRetaguardaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosAppRetaguardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
