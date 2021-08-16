import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProperty } from './../IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
//class based components again 22
export class PropertyCardComponent implements OnInit {

  @Input() property:IProperty
  constructor() { }

  ngOnInit() {
  }

}
