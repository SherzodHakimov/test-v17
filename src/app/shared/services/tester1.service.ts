import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tester1Service {

  isAuth = false;
  constructor() { }

  checkAuth(){
    return this.isAuth;
  }

}
