import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../class/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private url5:string;
  private url6:string;
  constructor(private http:HttpClient,private document:Document) { 
   
    this.url5="http://localhost:8080/document/addDocument";
    this.url6="http://localhost:8080/document/getDocument";
  }
  createDocument(document:Document):Observable<object>{
    return this.http.post(`${this.url5}`,document);
  }
 
  getDocumentId(id:number):Observable<Document>{
    return this.http.get<Document>(`${this.url6}/${id}`);
  }
 
}
