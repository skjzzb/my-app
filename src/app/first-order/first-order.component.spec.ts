import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOrderComponent } from './first-order.component';

describe('FirstOrderComponent', () => {
  let component: FirstOrderComponent;
  let fixture: ComponentFixture<FirstOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
