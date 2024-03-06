import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(): boolean {
    if(sessionStorage.getItem('loggedIn') == 'true'){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
