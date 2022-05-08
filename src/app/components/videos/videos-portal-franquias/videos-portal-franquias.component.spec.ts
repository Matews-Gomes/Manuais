import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPortalFranquiasComponent } from './videos-portal-franquias.component';

describe('VideosPortalFranquiasComponent', () => {
  let component: VideosPortalFranquiasComponent;
  let fixture: ComponentFixture<VideosPortalFranquiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPortalFranquiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPortalFranquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
