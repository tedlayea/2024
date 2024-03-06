import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signout(){
    sessionStorage.removeItem('loggedIn')
    // Clear the session here. For maintaiablity and reusablity better to create a service
  }

}
