import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-loanstatus',
  templateUrl: './loanstatus.component.html',
  styleUrls: ['./loanstatus.component.css']
})
export class LoanstatusComponent implements OnInit {
  id1:number;
  loan:any = FormGroup;

  constructor(private router:Router,public nav: NavbarService,private fb:FormBuilder) { }

  ngOnInit(): void {

  this.nav.visible=false;
    this.loan= this.fb.group({
      id:['',Validators.required]})
  }
  loanstatus(data:any){
    
    this.id1=data.id
    console.log(this.id1);
    this.router.navigate(['loanstatuspage',this.id1]);
    

  }


}
