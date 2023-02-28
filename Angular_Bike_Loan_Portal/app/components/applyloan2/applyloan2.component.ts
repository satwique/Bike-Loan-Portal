import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/class/document';
import { LoanService } from 'src/app/services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { Loan } from 'src/app/class/loan';

@Component({
  selector: 'app-applyloan2',
  templateUrl: './applyloan2.component.html',
  styleUrls: ['./applyloan2.component.css']
})
export class Applyloan2Component implements OnInit {
  loan1:Loan[];
  document1:Document[];
  id:number;
  id1:number;
  i1:number;
  i:number;
  document:Document=new Document();

  constructor(public nav: NavbarService,private service:DocumentService,private service1:LoanService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.nav.visible=false;
    this.id=this.route.snapshot.params['id'];
    this.i=this.id;
    console.log("hey");
    
    
    
    this.service1.getLoanList().subscribe(data=>{
      this.loan1=data;
      for(let i=0;i<this.loan1.length;i++){
        if(this.loan1[i].userid==this.id){
          this.id1=this.loan1[i].loanId;
        }
      }
      
      });
  }
  onSubmit(){
    this.saveDocument();
    this.document.lId=this.id1;
    this.router.navigate(['applyloancompleted',this.id]);

  }
  saveDocument(){
    
    this.service.createDocument(this.document).subscribe(data=>{console.log(data)},error=>console.error(error));
   
   
   

}
}
