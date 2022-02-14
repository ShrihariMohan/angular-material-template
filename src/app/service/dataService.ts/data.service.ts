import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router) { }
  isLoggedIn: boolean = false
  public getDataAfterNSeconds = (n: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(n)
      }, parseInt(n) * 1000)
    })
  }

  public login = () => {
    this.isLoggedIn = true
    this.router.navigate([''])

  }

  public logOut = () => {
    this.isLoggedIn = false
    this.router.navigate(['/login'])
  }
}
