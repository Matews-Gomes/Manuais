import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPDVComponent } from './videos-pdv.component';

describe('VideosPDVComponent', () => {
  let component: VideosPDVComponent;
  let fixture: ComponentFixture<VideosPDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
