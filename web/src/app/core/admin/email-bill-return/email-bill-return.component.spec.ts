import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EmailBillReturnComponent } from "./email-bill-return.component";

describe("EmailBillReturnComponent", () => {
  let component: EmailBillReturnComponent;
  let fixture: ComponentFixture<EmailBillReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailBillReturnComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBillReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
