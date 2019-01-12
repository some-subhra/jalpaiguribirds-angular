import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalManasComponent } from './royal-manas.component';

describe('RoyalManasComponent', () => {
  let component: RoyalManasComponent;
  let fixture: ComponentFixture<RoyalManasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalManasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalManasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
