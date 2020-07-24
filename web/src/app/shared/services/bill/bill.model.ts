export class Bill {
  public id: string;
  public name: string;
  public bill_invoice: string;
  public bill_generated: string;
  public bill_invoiced: string;
  public bill_due_date: string;
  public bill_paid: string;
  public date_generated: string;
  public date_invoice_sent: string;
  public date_due_date: string;
  public date_paid: string;
  public created_date: string;
  public modified_date: string;
  public by: string;
  public billed_to: string;

  constructor(
    id: string,
    name: string,
    bill_invoice: string,
    bill_generated: string,
    bill_invoiced: string,
    bill_due_date: string,
    bill_paid: string,
    date_invoice_sent: string,
    date_due_date: string,
    date_paid: string,
    created_date: string,
    modified_date: string,
    billed_to: string
  ) {
    this.id = id;
    this.name = name;
    this.bill_invoice = bill_invoice;
    this.bill_generated = bill_generated;
    this.bill_invoiced = bill_invoiced;
    this.bill_due_date = bill_due_date;
    this.bill_paid = bill_paid;
    this.date_invoice_sent = date_invoice_sent;
    this.date_due_date = date_due_date;
    this.date_paid = date_paid;
    this.created_date = created_date;
    this.modified_date = modified_date;
    this.billed_to = billed_to;
  }
}
