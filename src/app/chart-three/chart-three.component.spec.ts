import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartThreeComponent } from './chart-three.component';

describe('ChartThreeComponent', () => {
  let component: ChartThreeComponent;
  let fixture: ComponentFixture<ChartThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartThreeComponent]
    });
    fixture = TestBed.createComponent(ChartThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
