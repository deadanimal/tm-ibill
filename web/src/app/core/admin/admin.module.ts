import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";

import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.routing";
import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { BillStatementInteractiveComponent } from "./bill-statement-interactive/bill-statement-interactive.component";
import { EmailBillReturnComponent } from "./email-bill-return/email-bill-return.component";
import { PackageSubscriptionComponent } from "./package-subscription/package-subscription.component";
import { BillStreamCodeComponent } from "./bill-stream-code/bill-stream-code.component";
import { BillDiversionComponent } from "./bill-diversion/bill-diversion.component";
import { PreviousBillSummaryComponent } from "./previous-bill-summary/previous-bill-summary.component";
import { EmailTemplateComponent } from "./email-template/email-template.component";
import { BillMessageComponent } from "./bill-message/bill-message.component";
import { BillPresentmentComponent } from "./bill-presentment/bill-presentment.component";
import { BillDeliveryComponent } from "./bill-delivery/bill-delivery.component";

import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { ReportComponent } from "./report/report.component";
import { ManagementRolesComponent } from "./management-roles/management-roles.component";
import { EmailTemplatePersonalisationComponent } from "./email-template-personalisation/email-template-personalisation.component";

import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { ChargersUsageComponent } from "./chargers-usage/chargers-usage.component";
import { ChargersRewardComponent } from "./chargers-reward/chargers-reward.component";
import { ChargersAnnouncementComponent } from "./chargers-announcement/chargers-announcement.component";
import { ChargersBillSummaryComponent } from "./chargers-bill-summary/chargers-bill-summary.component";
import { ChargersPaymentChannelComponent } from "./chargers-payment-channel/chargers-payment-channel.component";
import { ChargersContactUsComponent } from "./chargers-contact-us/contact-us.component";
import { ChargersBillPresentmentComponent } from "./chargers-bill-presentment/chargers-bill-presentment.component";
import { ChargersBillAnalyticalComponent } from "./chargers-bill-analytical/chargers-bill-analytical.component";
import { BillinteractivePersonalisationComponent } from "./bill-interactive-personalisation/bill-interactive-personalisation.component";
import { ChargersServiceTaxComponent } from "./chargers-service-tax/chargers-service-tax.component";

// // AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    ManagementAuditComponent,
    ManagementUserComponent,
    ManagementRolesComponent,
    ReportComponent,
    DashboardComponent,
    BillStatementInteractiveComponent,
    EmailBillReturnComponent,
    PackageSubscriptionComponent,
    PreviousBillSummaryComponent,
    BillStreamCodeComponent,
    BillDiversionComponent,
    BillMessageComponent,
    EmailTemplateComponent,
    BillPresentmentComponent,
    BillDeliveryComponent,
    EmailTemplatePersonalisationComponent,
    ChargersUsageComponent,
    ChargersRewardComponent,
    ChargersAnnouncementComponent,
    ChargersBillSummaryComponent,
    ChargersPaymentChannelComponent,
    ChargersContactUsComponent,
    ChargersBillPresentmentComponent,
    ChargersBillAnalyticalComponent,
    BillinteractivePersonalisationComponent,
    ChargersServiceTaxComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    OrgChartModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    LeafletModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class AdminModule {}
