import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Loan } from 'src/app/class/loan';
import { LoanService } from 'src/app/services/loan.service';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {
  loan:Loan=new Loan();
  loan1:Loan[];
  
  i:number;
  id:number;
  id2:number;

  constructor(public nav: NavbarService,private router:Router,private service:LoanService,private route:ActivatedRoute,private toast:NgToastService,) { }

  ngOnInit(): void {
    this.nav.visible=false;
    this.service.getLoanList().subscribe(data=>{
      this.loan1=data;
      });
      this.id=this.route.snapshot.params['id'];
      console.log(this.id)
      this.loan.userid=this.id;
      console.log(this.loan.userid)
  }
  saveLoan(){
    
    this.service.createLoan(this.loan).subscribe(data=>{console.log(data)},error=>console.error(error)
    );
    
    

    
  }
  onSubmit(){
    this.loan.userid=this.id;
   
    this.saveLoan();
    
    this.toast.success({detail:"Success Message",summary:"Apply successful",duration:2000})
    
    
    this.applyloan();

  }
  applyloan(){
   this.router.navigate(['applyloancompleted',this.id]);
   Swal.fire(
    'Success!',
    'You have successfully Submitted the loan',
    'success'
  )
  
  }
 
  

}