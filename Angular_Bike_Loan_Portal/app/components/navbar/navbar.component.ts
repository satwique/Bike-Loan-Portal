import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public nav: NavbarService,private route: Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
    
  }
 

}
