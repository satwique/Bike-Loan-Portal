import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/class/loan';
import { User } from 'src/app/class/user';
import { NavbarService } from 'src/app/services/navbar.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent implements OnInit {
  id:number;
  user:User[];
  loan:Loan[];
  id1=0;
  id2:number;

  constructor(public nav: NavbarService,private router:Router,private route:ActivatedRoute,private service:LoanService) { }

  ngOnInit(): void {
    this.nav.visible=false;
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getLoanList().subscribe(data=>{
      this.loan=data;
      console.log(this.loan);
      
      for(let i=0;i<this.loan.length;i++){
        if(this.loan[i].userid==this.id){
          this.id1++;
          this.id2=this.loan[i].loanId;
        }
      }
     });
   

      
    
  }
  
 
        
  
  profile(){
    
   
      console.log(this.id1);
      
      this.router.navigate(['profile',this.id]);
     
    
  }
  apply(){
   
   
   
    if(this.id1==0){
      this.router.navigate(['applyloan',this.id]);

    }
    else{
      console.log(this.id1);
      Swal.fire({
        title:'Do you want update your loan',
        
        showCancelButton:true,
        confirmButtonText:`Update`,
        
        icon:'info', 
        }).then((result)=>{
          if(result.isConfirmed){
            this.router.navigate(['editloan',this.id2]);
          }
          else if(result.isDenied){
            Swal.fire('Changes are not saved','','info')
          }
        })
      
      
     }
    
    
    
  }
  status(){
    this.router.navigate(['loanstatus']);
  }

}
