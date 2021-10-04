import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUser(user: User) {
    console.log(`${user.userName} is added to database`)
    console.log(user)
  }

  constructor() { }
}
