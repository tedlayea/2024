import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username ='';
  password ='';
  error='';

  constructor(private router: Router){ }

  ngOnInit(): void {
    if(sessionStorage.getItem('loggedIn')== 'true'){
      this.router.navigate(['dasboard'])
    }
  }

  validate(){
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.username,
        password: this.password,
        // expiresInMins: 60, // optional
      })
    })
    .then(res => {
      if(res.status == 200){
        console.log("Sucesssfully logged-in");
        sessionStorage.setItem('loggedIn', 'true')
        this.router.navigate(['dasboard'])
      }else if(res.status == 400 || 401 ){
        this.error = "Please provide correct username and password"
        this.router.navigate(['login'])
      }
    })
    .catch(err =>  console.log("Error occured, please try again")) 
  }



}
