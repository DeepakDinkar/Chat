import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidGalleryComponent } from './mid-gallery.component';

describe('MidGalleryComponent', () => {
  let component: MidGalleryComponent;
  let fixture: ComponentFixture<MidGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
