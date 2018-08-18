import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayGridComponent } from './overlay-grid.component';

describe('OverlayGridComponent', () => {
  let component: OverlayGridComponent;
  let fixture: ComponentFixture<OverlayGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
