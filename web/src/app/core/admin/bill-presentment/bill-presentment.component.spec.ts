import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BillPresentmentComponent } from "./bill-presentment.component";

describe("BillPresentmentComponent", () => {
  let component: BillPresentmentComponent;
  let fixture: ComponentFixture<BillPresentmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillPresentmentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPresentmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
