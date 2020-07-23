import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BillDeliveryComponent } from "./bill-delivery.component";

describe("BillDeliveryComponent", () => {
  let component: BillDeliveryComponent;
  let fixture: ComponentFixture<BillDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillDeliveryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
