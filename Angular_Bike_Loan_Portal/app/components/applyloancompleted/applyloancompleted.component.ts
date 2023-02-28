import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';
import { Loan } from 'src/app/class/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-applyloancompleted',
  templateUrl: './applyloancompleted.component.html',
  styleUrls: ['./applyloancompleted.component.css']
})
export class ApplyloancompletedComponent implements OnInit {
  loan1:Loan[];
  id:number;
  id1:number;
  i1:number;
  i:number;

  constructor(public nav: NavbarService,private route:ActivatedRoute,private service:LoanService,private router:Router) { }

  ngOnInit(): void {

 this.nav.visible=false;
    this.id=this.route.snapshot.params['id'];
    this.i=this.id;
    
    
    
    this.service.getLoanList().subscribe(data=>{
      this.loan1=data;
      for(let i=0;i<this.loan1.length;i++){
        if(this.loan1[i].userid==this.id){
          this.id1=this.loan1[i].loanId;
        }
      }
      
      });
      
     
  }
  /*fun(){
    
     this.i=this.loan1.length-1;
      this.id=this.loan1[this.i].loanId;
      console.log(this.id)*/
      loanstatus(){
        this.router.navigate(['customerpage',this.id]);

      }

  

 

}

