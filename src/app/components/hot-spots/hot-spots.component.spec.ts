import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSpotsComponent } from './hot-spots.component';

describe('HotSpotsComponent', () => {
  let component: HotSpotsComponent;
  let fixture: ComponentFixture<HotSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
