import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
   user:string;
  constructor(private alertify:AlertifyService) { }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
  ngOnInit() {
  }
  loggedIn(){
    if(localStorage.getItem('token')){
      this.user=localStorage.getItem('token');
    }
    return localStorage.getItem('token');
  }
  onLogOut(){
    localStorage.removeItem('token');
    this.alertify.success('you are logged out')
  }

}
