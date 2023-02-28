import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';
import { Loan } from 'src/app/class/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {
  loan:Loan[];
  loan11:any = FormGroup;
  id1:number;

  constructor(public nav: NavbarService,private service:LoanService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {

  this.nav.visible=false;
    this.service.getLoanList().subscribe(data=>{
      this.loan=data;
      console.log(this.loan);
      
    });
    this.loan11= this.fb.group({
      id:['',Validators.required]})}

      onsubmit(data:any){
    
        this.id1=data.id
        console.log(this.id1);
        this.router.navigate(['loanstatuspage',this.id1]);
    
      }

}
