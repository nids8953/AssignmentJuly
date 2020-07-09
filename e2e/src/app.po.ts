import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }


  
  getLoginButton() {
    return element(by.css('app-login form .loginButton button'));
  }

  getForm() {
    return element(by.css('app-login form'));
  }

  getUserNameField() {
    return element(by.css('input[formControlName=username]'));    
  }
 
  getPaswordField() {
    return element(by.css('input[formControlName=password]'));
  }
 
  getDashboardText() {
    return element(by.css('app-dashboard p')).getText();
  }
}


