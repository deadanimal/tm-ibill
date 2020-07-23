import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BillMessageComponent } from "./bill-message.component";

describe("BillMessageComponent", () => {
  let component: BillMessageComponent;
  let fixture: ComponentFixture<BillMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillMessageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
