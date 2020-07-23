export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const USERPORTALROUTES: RouteInfo[] = [
  // {
  //   path: "/user-portal/dashboard",
  //   title: "Dashboard",
  //   type: "link",
  //   icontype: "fas fa-home text-default",
  // },
];
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/admin/bill",
    title: "Bill Presentment",
    type: "sub",
    icontype: "fas fas fa-newspaper text-default",
    collapse: "bill",
    isCollapsed: true,
    children: [
      { path: "bill-presentment", title: "Bill Presentment", type: "link" },
      { path: "bill-message", title: "Bill Message", type: "link" },
      { path: "bill-delivery", title: "Bill Delivery", type: "link" },
      { path: "bill-diversion", title: "Bill Diversion", type: "link" },
      { path: "bill-stream-code", title: "Bill Stream Code", type: "link" },
      {
        path: "interactive-bill-statement",
        title: "Interactive Bill Statement",
        type: "link",
      },
      {
        path: "interactive-bill-statement-personalisation",
        title: "Interactive Bill Statement Personalisation",
        type: "link",
      },
    ],
  },
  {
    path: "/admin/email",
    title: "Email",
    type: "sub",
    icontype: "fas fa-file-alt text-default",
    collapse: "email",
    isCollapsed: true,
    children: [
      {
        path: "email-template",
        title: "Template",
        type: "link",
      },
      {
        path: "email-template-personalisation",
        title: "Template Personalisation",
        type: "link",
      },
      {
        path: "bill-return",
        title: "Bill Return Management",
        type: "link",
      },
    ],
  },
  {
    path: "/admin/previous-bill-summary",
    title: "Previous Bill Summary",
    type: "link",
    icontype: "fas fa-archive text-default",
  },
  {
    path: "/admin/package-subscription",
    title: "Package Subscription",
    type: "link",
    icontype: "fas fa-folder-open text-default",
  },
  {
    path: "/admin/charges",
    title: "Charges",
    type: "sub",
    icontype: "fas fa-tasks text-default",
    collapse: "app",
    isCollapsed: true,
    children: [
      {
        path: "usage",
        title: "Usage",
        type: "link",
      },
      {
        path: "service-tax",
        title: "Service Tax",
        type: "link",
      },
      {
        path: "reward",
        title: "Reward",
        type: "link",
      },
      {
        path: "announcement",
        title: "Announcement",
        type: "link",
      },
      {
        path: "bill-summary",
        title: "Bill Summary",
        type: "link",
      },
      {
        path: "payment-channel",
        title: "Payment Channel",
        type: "link",
      },
      {
        path: "contact-us",
        title: "Contact Us",
        type: "link",
      },
      {
        path: "bill-analytical",
        title: "Bill Analytical",
        type: "link",
      },
    ],
  },
  // {
  //   path: "/admin/kutipan",
  //   title: "Kutipan",
  //   type: "link",
  //   icontype: "fas fa-building text-default",
  // },
  // {
  //   path: "/admin/bayaran",
  //   title: "Bayaran",
  //   type: "link",
  //   icontype: "fas fa-money-bill-alt text-default",
  // },
  // {
  //   path: "/admin/penguatkuasa",
  //   title: "Penguatkuasa",
  //   type: "link",
  //   icontype: "fas fa-tasks text-default",
  // },

  {
    path: "/admin/management",
    title: "User Management",
    type: "sub",
    icontype: "fas fa-user text-default",
    collapse: "management",
    isCollapsed: true,
    children: [
      { path: "users", title: "Users", type: "link" },
      { path: "roles", title: "Roles", type: "link" },
    ],
  },
  {
    path: "/admin/reporting",
    title: "Report",
    type: "sub",
    icontype: "fas fa-chart-bar text-default",
    collapse: "management",
    isCollapsed: true,
    children: [
      { path: "audit-trails", title: "Audit Trails", type: "link" },
      { path: "report", title: "Report", type: "link" },
      // { path: "users", title: "Users", type: "link" },
    ],
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/user/maklumat",
    title: "Maklumat Peribadi",
    type: "sub",
    icontype: "fas fa-tasks text-default",
    collapse: "mk",
    isCollapsed: true,
    children: [
      {
        path: "maklumat-pemohon",
        title: "Pemohon",
        type: "link",
      },
      {
        path: "maklumat-keluarga",
        title: "Keluarga/Penjaga",
        type: "link",
      },
      {
        path: "maklumat-akademik",
        title: "Akademik",
        type: "link",
      },
    ],
  },
  {
    path: "/user/senarai-pemohon",
    title: "Senarai Pemohon",
    type: "link",
    icontype: "fas fa-bell text-default",
  },
  {
    path: "/user/tawaran",
    title: "Tawaran",
    type: "sub",
    icontype: "fas fa-chart-bar text-default",
    collapse: "tw",
    isCollapsed: true,
    children: [
      {
        path: "penyata-baki",
        title: "Penyata Baki",
        type: "link",
      },
      {
        path: "urusan-lain",
        title: "Urusan Lain",
        type: "link",
      },
      {
        path: "pembayaran",
        title: "Pembayaran",
        type: "link",
      },
    ],
  },
  // {
  //   path: "/admin/finance",
  //   title: "Finance Management",
  //   type: "sub",
  //   icontype: "fas fa-money-bill-alt text-default",
  //   collapse: "fm",
  //   isCollapsed: true,
  //   children: [
  //     {
  //       path: "transaction-management",
  //       title: "Transaction Management",
  //       type: "link",
  //     },
  //     { path: "tax-management", title: "Tax Management", type: "link" },
  //     { path: "fee-management", title: "Fee Management", type: "link" },
  //     { path: "receipt-management", title: "Receipt Management", type: "link" },
  //     {
  //       path: "payment-gateway-management",
  //       title: "Payment Gateway Management",
  //       type: "link",
  //     },
  //   ],
  // },
  // {
  //   path: "/admin/seal-management",
  //   title: "Seal Management",
  //   type: "link",
  //   icontype: "fas fa-stamp text-default",
  // },
  // {
  //   path: "/admin/complaint-management",
  //   title: "Complaint Management",
  //   type: "sub",
  //   icontype: "fas fa-building text-default",
  //   collapse: "reporting",
  //   isCollapsed: true,
  //   children: [
  //     { path: "faq", title: "FAQ", type: "link" },
  //     { path: "complaint", title: "Complaint Management", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/reporting",
  //   title: "Reporting",
  //   type: "sub",
  //   icontype: "fas fa-chart-bar text-default",
  //   collapse: "management",
  //   isCollapsed: true,
  //   children: [
  //     { path: "audit-trails", title: "Audit Logs", type: "link" },
  //     { path: "report", title: "Reporting", type: "link" },
  //     { path: "users", title: "Users", type: "link" },
  //   ],
  // },
  // {
  //   path: "/admin/hierarchy-management",
  //   title: "Hierarchy Management",
  //   type: "link",
  //   icontype: "fas fa-building text-",
  // },
];
