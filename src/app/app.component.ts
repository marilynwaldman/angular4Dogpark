import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private dataService: DataService ){}

  ngOnInit(){
    //this.dataService.fetchData();
    //console.log(this.dataService.obj);
    //console.log(this.dataService.success());
  }
  
}
