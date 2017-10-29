import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { IDogPark } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor(private dataService: DataService ){}

   dogparks: IDogPark[] = [];

   ngOnInit() {

      this.dataService.fetchData();
      this.dataService.fetchData()
            .subscribe((data: IDogPark[]) => this.dogparks = data);
      //console.log(this.dogparks);
      //console.log(this.dataService.obj);
   }

}
