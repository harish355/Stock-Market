import { Ipo } from "src/model/Ipo";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({ providedIn: 'root' })
export class IpoService {
  private url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/api/v1.0/market/stock/';
  }
  addIpo(ipo: Ipo) {
    this.httpClient.post<Ipo>(this.url + "add" + ipo.id, ipo).subscribe(response => response);

  }
  getIpo(id: string): Observable<Ipo> {
    return this.httpClient.get<Ipo>(this.url + id);
  }


}
