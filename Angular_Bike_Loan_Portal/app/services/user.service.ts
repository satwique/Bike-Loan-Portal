import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = 'http://localhost:8080';
  url2:string;
  url3:string
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(  private httpclient: HttpClient,private userAuthService: UserAuthService) { }
  
  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles:any):boolean {
    let  isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    

    if (userRoles != null && userRoles) {
      for(let i = 0; i < userRoles.length; i++){
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
             isMatch = true;
             return isMatch;
          } 
          else
           {
            return isMatch;
          }
          return isMatch
        }
        return isMatch
      }
      return isMatch
      
    }
    return isMatch
  }

  addUser(user:User):Observable<object>{
    this.url2="http://localhost:8080/registerNewUser";
    return this.httpclient.post(`${this.url2}`,user);
  }

  getUserList():Observable<User[]>{
    this.url3="http://localhost:8080/getUserList";
    return this.httpclient.get<User[]>(`${this.url3}`);
    
  }
}
 
