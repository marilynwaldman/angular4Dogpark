import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  
  fetchData(){
     return this.http.get('http://localhost:3000/dogparks')
              .map((response) => response.json());
              //.subscribe((data) => console.log(data));

  }
    obj = [
      {Id: " 1",
      Name: "Twin Lakes Dog Park"} ,   
     {Id: " 2",
      Name: "Boulder Dog Park"}
    ]
       
     success(){
         return "successful";
     }

   
}