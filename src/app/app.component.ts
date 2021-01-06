import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cargoCapacity: any;
  manufacturer: any;
  consumables: any;
  maxAtmospheringSpeed: any;
  created: any;
  constructor(private http: HttpClient) {}
listOfDetails:any;
ResultModel:any;
  ngOnInit(){
    this.http.get('https://swapi.dev/api/starships/').subscribe(result=>{
       this.listOfDetails =result['results']
     
    })
  }
  title = 'POC';
  OnSelectionChange(event){
    let targetValue=event.target.value
    let trial=this.listOfDetails.map(item=>{
      if(item.name==targetValue){
        this.ResultModel=item.model
        this.cargoCapacity=item['cargo_capacity']
        this.manufacturer=item['manufacturer']
        this.consumables=item['consumables']
        this.maxAtmospheringSpeed=item['max_atmosphering_speed']
        this.created=item['created']
      }
    })
  }
}
