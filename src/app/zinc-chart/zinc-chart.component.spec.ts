import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZincChartComponent } from './zinc-chart.component';

describe('ZincChartComponent', () => {
  let component: ZincChartComponent;
  let fixture: ComponentFixture<ZincChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZincChartComponent]
    });
    fixture = TestBed.createComponent(ZincChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
