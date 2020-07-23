import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BillStatementInteractiveComponent } from "./bill-statement-interactive.component";

describe("BillStatementInteractiveComponent", () => {
  let component: BillStatementInteractiveComponent;
  let fixture: ComponentFixture<BillStatementInteractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillStatementInteractiveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillStatementInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
