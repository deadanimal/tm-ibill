import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ChargersAnnouncementComponent } from "./chargers-announcement.component";

describe("ChargersAnnouncementComponent", () => {
  let component: ChargersAnnouncementComponent;
  let fixture: ComponentFixture<ChargersAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChargersAnnouncementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargersAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
