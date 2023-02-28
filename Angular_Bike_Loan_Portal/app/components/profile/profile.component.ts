import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Loan } from 'src/app/class/loan';
import { LoanService } from 'src/app/services/loan.service';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:number;
  loan1:Loan[];
  loan:Loan=new Loan();
  id2:number;

  constructor(public nav: NavbarService,private router:Router,private route:ActivatedRoute,private service:LoanService) { }

  ngOnInit(): void {
    this.nav.visible=false;
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getLoanList().subscribe(data=>{
      this.loan1=data;
    for(let i=0;i<this.loan1.length;i++){
      if(this.loan1[i].userid==this.id){
        this.id2=this.loan1[i].loanId;

      }
    }
    this.service.getLoanId(this.id2).subscribe(data1=>{console.log(data1);
      this.loan=data1;
      },error=>console.error(error));
      
        
        
      });
  }

}
