import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(userName:string,password:string):boolean {
   if(userName==="kanwar" && password==="singh100"){
     return true
   }
   else return false


}

}
