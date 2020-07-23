import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BillDiversionComponent } from "./bi./bill-diversion.component

describe("BillDiversionComponent", () => {
  let component: BillDiversionComponent;
  let fixture: ComponentFixture<BillDiversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillDiversionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDiversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
