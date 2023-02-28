import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgToastService } from 'ng-angular-popup';
import { Loan } from 'src/app/class/loan';
import { LoanService } from 'src/app/services/loan.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-appliedloans',
  templateUrl: './appliedloans.component.html',
  styleUrls: ['./appliedloans.component.css']
})
export class AppliedloansComponent implements OnInit {
  loan:Loan[];
  loan1:Loan=new Loan();
  id1:number;
  id2=0;
  loan2:Loan[];
  data1:any;

  constructor(public nav: NavbarService,private service:LoanService,private toast:NgToastService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.nav.visible=false;
    this.service.getLoanList().subscribe(data=>{
      this.loan=data;
      console.log(this.loan);
      
      
      
      
      });
  
  }
  
 
  
  accept(id:number,data:any){
    this.id1=id;
   
    this.data1=data;
    
    
    this.service.getLoanList().subscribe(data3=>{
      this.loan2=data3;
      console.log(this.loan2);
      for(let i=0,j=0;i<this.loan2.length;i++){
        if(this.data1.loanId==this.loan2[i].loanId){
          
         if(this.loan2[i].loantype=="Pending"){
          this.id2=1;
          this.fun();
          }
          else if(this.loan2[i].loantype=="Rejected"){
            this.id2=3;
            this.fun2();
          }
         else{
          this.fun1();
         }
        }
 
         
       }
       
    });
    
  }
  fun1(){
    this.toast.warning({detail:"",summary:"You have already accepted the loan",duration:5000})
    
  }
  fun2(){
    this.toast.warning({detail:"",summary:"You have already rejected the loan",duration:5000})
    
  }
  fun(){
    if(this.id2==1){
      this.data1.loantype="Accepted"
      this.updateLoan();
     }
     

  }
  
  fun3(){
    if(this.id2==2){
      this.data1.loantype="Rejected"
      this.updateLoan();
     }

  }
  reject(id:number,data:any){
    this.id1=id;
   
    this.data1=data;
    
    this.service.getLoanList().subscribe(data4=>{
      this.loan2=data4;
      console.log(this.loan2);
      for(let i=0,j=0;i<this.loan2.length;i++){
        if(this.data1.loanId==this.loan2[i].loanId){
          
         if(this.loan2[i].loantype=="Pending"){
          this.id2=2;
          this.fun3();
          
          
         }
         else if(this.loan2[i].loantype=="Accepted"){
          this.id2=3;
          this.fun1();
        }
         else{
          this.fun2();
         }
        }
 
         
       }
       
    });
    
   
   
    


  }
  updateLoan(){
    this.service.updateLoan(this.id1,this.data1).subscribe(
      data=>{

        
         console.log(data);
      
      
         this.data1=new Loan();
      console.log(this.data1)
    },error=>console.error(error));
  }
 
}
