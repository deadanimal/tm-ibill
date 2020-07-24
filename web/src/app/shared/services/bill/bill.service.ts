import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Form } from "@angular/forms";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Bill } from "./bill.model";

@Injectable({
  providedIn: "root",
})
export class BillService {
  // URL
  public urlBill: string = environment.baseUrl + "v1/bills/";

  // Data
  public Bill: Bill;
  public Bills: Bill[] = [];
  public BillsFiltered: Bill[] = [];

  constructor(private http: HttpClient) {}

  create(body: Form): Observable<Bill> {
    console.log(this.urlBill);
    console.log(body);
    return this.http.post<any>(this.urlBill, body).pipe(
      tap((res) => {
        console.log("Bills: ", res);
      })
    );
  }

  getAll(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.urlBill).pipe(
      tap((res) => {
        console.log("Bills: ", res);
      })
    );
  }

  generateReport(): Observable<any> {
    let urlTemp =
      "https://tm-ibill-api.pipe.my/v1/bills/f1324226-e7a2-4492-abf7-c85775f8ed76/generate_report_1/";
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        console.log("Billsqwewqeqwe: ", res);
      })
    );
  }

  generateReport2(): Observable<any> {
    let urlTemp =
      "https://tm-ibill-api.pipe.my/v1/bills/f1324226-e7a2-4492-abf7-c85775f8ed76/generate_report_2/";
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        console.log("Billsqwewqeqwe: ", res);
      })
    );
  }

  getOne(id: String): Observable<Bill> {
    let urlBillOne = this.urlBill + id + "/";
    return this.http.get<Bill>(urlBillOne).pipe(
      tap((res) => {
        console.log("Bill: ", res);
      })
    );
  }

  update(id: String, body: Form): Observable<Bill> {
    let urlBillOne = this.urlBill + id + "/";
    console.log(urlBillOne);
    console.log(body);
    return this.http.put<Bill>(urlBillOne, body).pipe(
      tap((res) => {
        console.log("Bill", res);
      })
    );
  }

  filter(field: String): Observable<Bill[]> {
    let urlFilter = this.urlBill + "?" + field + "/";
    return this.http.get<Bill[]>(urlFilter).pipe(
      tap((res) => {
        console.log("Bills", res);
      })
    );
  }
}
