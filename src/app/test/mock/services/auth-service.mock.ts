import { Observable, of, throwError } from 'rxjs';
import { IUserModel } from 'src/app/user.models';

export class AuthServiceMock {

  authenticateUser(userInfo : IUserModel) : Observable<boolean>{
    if(userInfo.username === 'user' && userInfo.password === 'user123')
    {
       return of(true);
    }  
    return throwError('In valid credentails');
  }
}
 