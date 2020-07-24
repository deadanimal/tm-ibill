import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillAnalyticsComponent } from './customer-bill-analytics.component';

describe('CustomerBillAnalyticsComponent', () => {
  let component: CustomerBillAnalyticsComponent;
  let fixture: ComponentFixture<CustomerBillAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBillAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBillAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
