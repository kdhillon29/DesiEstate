import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { IProperty } from './../property/IProperty.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) {
  }

 getAllProperties(): Observable<IProperty[]>{

   return this.http.get('data/properties.json')
   .pipe(
     map(data=>{
       const propertyArray:Array<IProperty>=[];
        //  const {id}= data;
       for(const id in data){
       if(data.hasOwnProperty(id))
         {
          const {Id, PType,Name,Price} = data[id];
          const property:IProperty={Id, PType,Name,Price}
           propertyArray.push(property);
         }




        }
          return propertyArray;
     })
   )
 };


}
