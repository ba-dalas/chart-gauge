import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeOneComponent } from './gauge-one.component';

describe('GaugeOneComponent', () => {
  let component: GaugeOneComponent;
  let fixture: ComponentFixture<GaugeOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaugeOneComponent]
    });
    fixture = TestBed.createComponent(GaugeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
