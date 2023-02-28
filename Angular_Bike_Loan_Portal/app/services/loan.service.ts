import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Loan } from '../class/loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  
  private url:string;
  private url1:string;
 
  private url5:string;
  private url6:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/loan/addLoan";
    this.url1="http://localhost:8080/loan/getLoanList";
    this.url5="http://localhost:8080/loan/getLoan";
    this.url6="http://localhost:8080/loan/editLoan";
  }
  createLoan(loan:Loan):Observable<object>{
    return this.http.post(`${this.url}`,loan);
  }
  getLoanList():Observable<Loan[]>{
    return this.http.get<Loan[]>(`${this.url1}`);
    
  }
 
  getLoanId(id:number):Observable<Loan>{
    return this.http.get<Loan>(`${this.url5}/${id}`);
  }
  updateLoan(id:number,loan:Loan):Observable<object>{
    return this.http.put(`${this.url6}/${id}`,loan);
  }
}


