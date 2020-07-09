import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('TestCases app is running!');
  });


  it('check for login page loaded', () => {
    page.navigateTo();
    page.getLoginButton().getText();
    expect(page.getLoginButton().getText()).toEqual('Login');
  });

  it('enter username & password and then click on login button and navigate to dashboard', () => {
    page.navigateTo();
    page.getUserNameField().sendKeys('user');

    page.getPaswordField().sendKeys('user123');

    browser.sleep(2000);

    page.getForm().submit();    

    
    browser.sleep(2000);
    expect(page.getDashboardText()).toEqual('Welcome to dashboard');

    
    browser.sleep(2000);
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
