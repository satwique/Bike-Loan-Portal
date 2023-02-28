import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/class/user';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
user:User=new User();
user1:User[];
i2=0;

  constructor(private router:Router,public nav: NavbarService,private service:UserService,private toast:NgToastService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.nav.visible=false;
    this.nav.visible=false;
    this.service.getUserList().subscribe(data=>{
      this.user1=data;
      console.log(this.user1)
      });
      
     
    
  }
  registerSubmit(data:any){
    console.log(data.userName);
    
    
    
   for(let i=0;i<this.user1.length;i++){
     
       if(data.userName==this.user1[i].userName){
         this.i2=1;

       }
     
    }
    if(this.i2==0){
     this.saveUser();
     Swal.fire(
      'Success!',
      'You have successfully register',
      'success'
    )
     this.goToLogin();
     
    
    
    }
    else if(this.i2==1){
      Swal.fire(
        'error',
        'You Register is unsucessfull as user is already present',
        'error'
      )
      console.log(this.user)
    }
     
   }
   goToLogin(){
    console.log("hey");
 
     this.router.navigate(['login']);
     
     
 
 }
 
 saveUser(){
   this.service.addUser(this.user).subscribe(data=>{console.log(data)},error=>console.error(error)
   );

   
 }
 

 }


