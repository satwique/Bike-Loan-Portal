import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loan } from 'src/app/class/loan';
import { LoanService } from 'src/app/services/loan.service';

import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-loanstatuspage',
  templateUrl: './loanstatuspage.component.html',
  styleUrls: ['./loanstatuspage.component.css']
})
export class LoanstatuspageComponent implements OnInit {
  loan:Loan=new Loan();
    id:number;

  constructor(private route:ActivatedRoute,public nav: NavbarService,private service:LoanService) { }

  ngOnInit(): void {
    this.nav.visible=false;
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    
    this.service.getLoanId(this.id).subscribe(data=>{console.log(data);
    this.loan=data;},error=>console.error(error));
  }
}
