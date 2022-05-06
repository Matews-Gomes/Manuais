import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDiadiaComponent } from './videos-diadia.component';

describe('VideosDiadiaComponent', () => {
  let component: VideosDiadiaComponent;
  let fixture: ComponentFixture<VideosDiadiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosDiadiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosDiadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
