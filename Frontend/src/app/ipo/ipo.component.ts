import { Component, OnInit } from '@angular/core';

import { Ipo } from 'src/model/Ipo';
import { IpoService } from 'src/services/ipo.service';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/model/Company';
@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent {
  public formData: Ipo = {
    id: 0,
    companyName: '',
    Date: '',
    Time: '',
    price: ''
  };
  comp: Company[];
  stockex: [];
  ipos: Ipo[];
  submitted: boolean;
  constructor(private ipoService: IpoService, private companyService: CompanyService) {
    this.companyService.getCompanies().subscribe(response => { this.comp = response });
    this.submitted = false;
  }
  ngOnInit(): void {


  }
  onSubmit() {
    this.ipoService.addIpo(this.formData);
    this.submitted = true;
    console.log("out");
  }



}
