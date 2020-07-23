import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";
// get survey question api
import { Surveyquestion } from "src/app/shared/services/surveyquestions/surveyquestions.model";
import { SurveyquestionsService } from "src/app/shared/services/surveyquestions/surveyquestions.service";
//get answer api
import { Surveyanswer } from "src/app/shared/services/surveyanswers/surveyanswers.model";
import { SurveyanswersService } from "src/app/shared/services/surveyanswers/surveyanswers.service";

// import { AuditData } from 'src/assets/mock/admin-Audit/Audit.data.json'
import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

//
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from "@angular/forms";
import swal from "sweetalert2";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { Router, ActivatedRoute } from "@angular/router";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.scss"],
})
export class SurveyComponent implements OnInit {
  // Image
  imgLogo = "assets/img/theme/ijn-bg.jpg";

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: Surveyquestion[] = [];
  SelectionType = SelectionType;

  listSurveyQuestion: any;

  surveyForm: FormGroup;
  form: FormArray;
  editSurveyQuestionForm: FormGroup;
  addNewSurveyQuestionForm: FormGroup;

  constructor(
    private notifyService: NotifyService,
    private zone: NgZone,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private SurveyquestionData: SurveyquestionsService,
    private SurveyanswerData: SurveyanswersService,
    private loadingBar: LoadingBarService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.SurveyquestionData.getAll().subscribe((res) => {
      let counter = 0;
      this.listSurveyQuestion = res;
      console.log(this.listSurveyQuestion);
      // console.log("Svc: ", this.listSurveyquestion);
      this.listSurveyQuestion.forEach((question) => {
        if ((counter = 0)) {
          this.surveyForm = this.formBuilder.group({
            form: this.formBuilder.array([this.initAssessment(question.id)]),
          });
        } else {
          this.addAssessment(question.id);
        }
        counter++;
      });
    });
    // this.surveyForm = this.formBuilder.group({
    //   form: this.formBuilder.array([this.initAssessment()]),
    // });

    console.log(this.surveyForm);

    // this.addNewSurveyQuestionForm = this.formBuilder.group({
    //   question: new FormControl(""),
    //   category: new FormControl(""),
    //   survey_type: new FormControl(""),
    // });

    // this.editSurveyQuestionForm = this.formBuilder.group({
    //   id: new FormControl(""),
    //   question: new FormControl(""),
    //   category: new FormControl(""),
    //   survey_type: new FormControl(""),
    // });
  }

  // Dynamic form
  initAssessment(id: string) {
    return this.formBuilder.group({
      question_id: new FormControl(id),
      answer: new FormControl(""),
      // remarks: new FormControl(""),
      // supporting_doc: new FormControl(""),
      // total_led: new FormControl(""),
      // total_lamp: new FormControl(""),
    });
  }

  addAssessment(id: string) {
    this.form = this.surveyForm.get("form") as FormArray;
    this.form.push(this.initAssessment(id));
    console.log(this.form.value);
  }

  addNewSurveyAnswer() {
    // console.log("qqqq");
    this.loadingBar.start();
    // this.successMessage();
    console.log(this.surveyForm.value);
    this.SurveyanswerData.create(this.surveyForm.value).subscribe(
      () => {
        // Success
        // this.isLoading = false
        // this.successMessage();
        this.loadingBar.complete();
        this.successAlert("add new");
        window.location.reload();
      },
      () => {
        // Failed
        // this.isLoading = false
        this.errorAlert("add new");
      },
      () => {
        // After
        // this.notifyService.openToastr("Success", "Welcome back");
        // this.navigateHomePage();
      }
    );
  }

  errorAlert(task) {
    swal.fire({
      title: "Error",
      text: "Cannot " + task + " Survey Answer, Please Try Again!",
      type: "error",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-danger",
      confirmButtonText: "Close",
    });
  }

  successAlert(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + " Survey Answer!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }
}
