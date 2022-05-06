import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPortalNfeComponent } from './videos-portal-nfe.component';

describe('VideosPortalNfeComponent', () => {
  let component: VideosPortalNfeComponent;
  let fixture: ComponentFixture<VideosPortalNfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPortalNfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPortalNfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
