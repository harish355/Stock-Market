import { Injectable } from "@angular/core";
import { Company } from "src/model/Company";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({ providedIn: 'root' })
export class CompanyService {
  private url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/api/v1.0/market/company/';
  }
  addCompany(company: Company) {
    this.httpClient.post<Company>(this.url + "register", company).subscribe(response => response);

  }
  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url + "getall");
  }
  getCompany(id: string): Observable<Company> {
    return this.httpClient.get<Company>(this.url + 'info/' + id);
  }
  deleteCompany(id: string) {
    this.httpClient.delete(this.url + 'delete/' + id)
      .subscribe(response => response);

  }

}
