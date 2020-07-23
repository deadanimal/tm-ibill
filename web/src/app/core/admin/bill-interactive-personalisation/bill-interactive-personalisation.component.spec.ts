import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BillinteractivePersonalisationComponent } from "./bill-interactive-personalisation.component";

describe("BillinteractivePersonalisationComponent", () => {
  let component: BillinteractivePersonalisationComponent;
  let fixture: ComponentFixture<BillinteractivePersonalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillinteractivePersonalisationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillinteractivePersonalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
