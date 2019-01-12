import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTripReportsComponent } from './all-trip-reports.component';

describe('AllTripReportsComponent', () => {
  let component: AllTripReportsComponent;
  let fixture: ComponentFixture<AllTripReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTripReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTripReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
