import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(public nav: NavbarService,private router:Router) { }

  ngOnInit(): void {
    this.nav.visible=false;
  }
  appliedloans(){
    this.router.navigate(['appliedloans'])
  }
  approvedloans(){
    this.router.navigate(['loandetails'])
  }


}
