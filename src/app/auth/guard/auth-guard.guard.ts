import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private roteamento : Router){}
  
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
    const tokenExist = localStorage.getItem('token')
    if(tokenExist){
      return true;
    }
    this.roteamento.navigate(['admin'])
    return false;
  }
  
}
