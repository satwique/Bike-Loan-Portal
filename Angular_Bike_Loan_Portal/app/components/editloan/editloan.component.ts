import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';
import { Loan } from 'src/app/class/loan';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editloan',
  templateUrl: './editloan.component.html',
  styleUrls: ['./editloan.component.css']
})
export class EditloanComponent implements OnInit {
  loan:Loan=new Loan();
  loan1:Loan[];
  id:number;
  id1:number;

  constructor(private route:ActivatedRoute,private service:LoanService,public nav: NavbarService,private router:Router,private toast:NgToastService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.nav.visible=false;
   this.snack.open("you can only edit the loan ",'',{duration:3000})
    

    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getLoanId(this.id).subscribe(data=>{console.log(data);
      this.loan=data;
      },error=>console.error(error));
      this.service.getLoanList().subscribe(data=>{
        this.loan1=data;
        
        for(let i=0;i<this.loan1.length;i++){
          if(this.loan1[i].loanId==this.id){
            
            this.id1=this.loan1[i].userid;
            console.log(this.id1);
          }
        }
      });

      
     
  }
  onSubmit(){
    this.updateLoan();
    this.goto();

  }
  onSubmit1(){
    this.router.navigate(['customerpage',this.id1])

  }
  updateLoan(){
    this.service.updateLoan(this.id,this.loan).subscribe(
      data=>{

        
         console.log(data);
      
      
         this.loan=new Loan();
      console.log(this.loan)
    },error=>console.error(error));
  }
  goto(){
    alert("you have succesfully update the your loan")
    this.router.navigate(['customerpage',this.id1])
  }

}

