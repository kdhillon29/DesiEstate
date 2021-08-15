import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
//class based component
export class PropertyListComponent implements OnInit {

  Properties:Array<any>=[
    {
      id:1,
    name:"Birla House",
    type:"House",
    price:12000
    },{
      id:2,
    name:"Delhi House",
    type:"House",
    price:12000
    },{
      id:3,
    name:"Tata House",
    type:"House",
    price:43000
    },{
      id:4,
    name:"John House",
    type:"House",
    price:54000
    },{
      id:5,
    name:"Patiala House",
    type:"House",
    price:42000
    },{
      id:6,
    name:"Apna House",
    type:"House",
    price:72000
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
