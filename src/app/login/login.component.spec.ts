import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.service';
import { AuthServiceMock} from './../test/mock/services/auth-service.mock';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports :[
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
       // AuthService,
        {
          provide : AuthService , useClass : AuthServiceMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('on login form page load fields should be set to empty', () => {
    expect(component.loginForm.value).toEqual({username:'', password:''});
  });

  it('on page Load check for errorMessage value it should be null', () => {
    expect(component.errorMessage).toBeFalsy();
  });

  it('on Successfull login router navigate should be called', () => {
      component.loginForm.setValue({username:'user',password: 'user123'});
      spyOn(component.route,'navigate')
      component.submitForm();
      expect(component.route.navigate).toHaveBeenCalledWith(['/dashboard']);
      expect(component.errorMessage).toBeFalsy();
 
   });

   it('on unSuccessfull login router navigate should not be called', () => {
    component.loginForm.setValue({username:'',password: ''});
    spyOn(component.route,'navigate')
    component.submitForm();
    expect(component.route.navigate).not.toHaveBeenCalled();
    expect(component.errorMessage).toBeFalsy();
  });

  
  it('on wrong credentails entered check for call of function onFailureOfLogin', () => {
    component.loginForm.setValue({username:'user',password: 'usre234'});
    spyOn(component.route,'navigate');
    spyOn(component, 'onFailureOfLogin');
    component.submitForm();
    expect(component.route.navigate).not.toHaveBeenCalled();
    expect(component.onFailureOfLogin).toHaveBeenCalled();
  });

    
  it('on wrong credentails or on exception check for error Message ', () => {
    component.loginForm.setValue({username:'user',password: 'usre234'});
    component.submitForm();
    expect(component.errorMessage).not.toBeFalsy();
  });
  
});
