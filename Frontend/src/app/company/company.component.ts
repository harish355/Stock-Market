import { Component, OnInit } from '@angular/core';
import { Company } from 'src/model/Company';
import { CompanyService } from 'src/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  stockex: ['NSE', 'BSE'];
  sectors: [];
  public formData: Company = {
    companyId: '',
    companyName: '',
    ceo: '',
    turnover: '',
    listedInStockExchanges: '',
    website: ''
  };
  companies: Company[];
  submitted: boolean;
  constructor(private companyService: CompanyService) {
    this.submitted = false;

  }
  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(response => { this.companies = response });

  }
  onSubmit() {
    this.companyService.addCompany(this.formData);
    this.submitted = true;
    console.log("out");
  }
  onDelete(data) {
    this.companyService.deleteCompany(data);
  }


}
