import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:any;
  public showPassword: boolean;
  public showPasswordOnPress: boolean;
  constructor( private userService: UserService, private userAuthService: UserAuthService,public nav: NavbarService,private toast:NgToastService,
    private router: Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.nav.visible=false;
   
  }
  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
      
       this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        const role = response.user.role[0].roleName;
        console.log(response.user.uId)
        this.id=response.user.uId;
        
        if (role === 'Admin') {
          this.toast.success({detail:"Success Message",summary:"Login successful",duration:5000})
          this.router.navigate(['/adminpage',this.id]);
        } else if(role === 'User'){
          this.toast.success({detail:"Success Message",summary:"Login successful",duration:5000})
          this.router.navigate(['/customerpage',this.id]);
        }
        else{
         this.snack.open("you have enter wrong credential",'',{duration:3000})

        }

      },
      (error) => {
        console.log(error);
        this.snack.open("you have enter wrong credential",'',{duration:3000})

      }
    );
  }
  goToRegister(){
    this.router.navigate(['register'])
}
myFunction() {
  let x : any = document.getElementById("inputPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

}
