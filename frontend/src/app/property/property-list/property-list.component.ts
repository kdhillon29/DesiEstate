import { Component, OnInit } from '@angular/core';
import { HousingService } from './../../services/housing.service';
import { IProperty } from '../../models/iproperty';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
//class based component
export class PropertyListComponent implements OnInit {

  Properties:Array<IProperty>=[];
  SellRent:number=1;




  constructor(private housingService:HousingService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;     // rent wil have url value
    }
    this.housingService.getAllProperties(this.SellRent)
    .subscribe(
      data=>{
        this.Properties=data
        // const newProperty=JSON.parse(localStorage.getItem('newProp'));
        // if(newProperty.SellRent==this.SellRent){

        //   this.Properties=[newProperty,...this.Properties]
        // }
         console.log(data)
      },
      error=>{console.log(error);}
    );

  }

}
