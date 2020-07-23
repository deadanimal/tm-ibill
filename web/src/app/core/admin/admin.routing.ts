import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BillStatementInteractiveComponent } from "./bill-statement-interactive/bill-statement-interactive.component";
import { EmailBillReturnComponent } from "./email-bill-return/email-bill-return.component";
import { PackageSubscriptionComponent } from "./package-subscription/package-subscription.component";
import { BillStreamCodeComponent } from "./bill-stream-code/bill-stream-code.component";
import { BillDiversionComponent } from "./bill-diversion/bill-diversion.component";
import { EmailTemplateComponent } from "./email-template/email-template.component";
import { PreviousBillSummaryComponent } from "./previous-bill-summary/previous-bill-summary.component";
import { BillMessageComponent } from "./bill-message/bill-message.component";
import { BillPresentmentComponent } from "./bill-presentment/bill-presentment.component";
import { BillDeliveryComponent } from "./bill-delivery/bill-delivery.component";

import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { ReportComponent } from "./report/report.component";
import { ManagementRolesComponent } from "./management-roles/management-roles.component";
import { EmailTemplatePersonalisationComponent } from "./email-template-personalisation/email-template-personalisation.component";
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

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "bill",
        children: [
          {
            path: "interactive-bill-statement",
            component: BillStatementInteractiveComponent,
          },
          {
            path: "bill-stream-code",
            component: BillStreamCodeComponent,
          },
          {
            path: "bill-message",
            component: BillMessageComponent,
          },
          {
            path: "bill-presentment",
            component: BillPresentmentComponent,
          },
          {
            path: "bill-delivery",
            component: BillDeliveryComponent,
          },
          {
            path: "bill-diversion",
            component: BillDiversionComponent,
          },
          {
            path: "interactive-bill-statement-personalisation",
            component: BillinteractivePersonalisationComponent,
          },
        ],
      },
      {
        path: "previous-bill-summary",
        component: PreviousBillSummaryComponent,
      },
      {
        path: "package-subscription",
        component: PackageSubscriptionComponent,
      },
      {
        path: "email",
        children: [
          {
            path: "bill-return",
            component: EmailBillReturnComponent,
          },
          {
            path: "email-template",
            component: EmailTemplateComponent,
          },
          {
            path: "email-template-personalisation",
            component: EmailTemplatePersonalisationComponent,
          },
        ],
      },
      {
        path: "charges",
        children: [
          {
            path: "usage",
            component: ChargersUsageComponent,
          },
          {
            path: "service-tax",
            component: ChargersServiceTaxComponent,
          },
          {
            path: "reward",
            component: ChargersRewardComponent,
          },
          {
            path: "announcement",
            component: ChargersAnnouncementComponent,
          },
          {
            path: "bill-summary",
            component: ChargersBillSummaryComponent,
          },
          {
            path: "payment-channel",
            component: ChargersPaymentChannelComponent,
          },
          {
            path: "contact-us",
            component: ChargersContactUsComponent,
          },
          {
            path: "bill-presentment",
            component: ChargersBillPresentmentComponent,
          },
          {
            path: "bill-analytical",
            component: ChargersBillAnalyticalComponent,
          },
        ],
      },
      {
        path: "reporting",
        children: [
          {
            path: "audit-trails",
            component: ManagementAuditComponent,
          },
          {
            path: "report",
            component: ReportComponent,
          },
        ],
      },
      {
        path: "management",
        children: [
          {
            path: "users",
            component: ManagementUserComponent,
          },
          {
            path: "roles",
            component: ManagementRolesComponent,
          },
        ],
      },
    ],
  },
];
