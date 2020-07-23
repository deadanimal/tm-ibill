import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EmailTemplatePersonalisationComponent } from "./email-template-personalisation.component";

describe("EmailTemplatePersonalisationComponent", () => {
  let component: EmailTemplatePersonalisationComponent;
  let fixture: ComponentFixture<EmailTemplatePersonalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTemplatePersonalisationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTemplatePersonalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
