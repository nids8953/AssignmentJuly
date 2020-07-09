import { Injectable } from '@angular/core';
import { IUserModel } from './user.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticateUser(userInfo : IUserModel) : Observable<boolean>{
    if(userInfo.username === 'user' && userInfo.password === 'user123')
     return of(true);
    else
     return of(false);
  }
}
 