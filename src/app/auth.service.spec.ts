import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [
     
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('authenticate user function should be present',()=>{
     expect(service.authenticateUser).toBeDefined();
  });

  it('authenticate user functionality',()=>{
    service.authenticateUser({username:'user',password:'user123'}).subscribe(value => {
      expect(value).toEqual(true);
    });

 });

 it('authenticate user functionality',()=>{
    service.authenticateUser({username:'user',password:'user1fff23'}).subscribe(value => {
      expect(value).toEqual(false);
    });

 });

});
