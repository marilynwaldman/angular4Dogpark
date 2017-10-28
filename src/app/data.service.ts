import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

    obj = {
      Id: " 1",
      Name: "Twin Lakes Dog Park"

    }
       
     success(){
         return "successful";
     }

   
}