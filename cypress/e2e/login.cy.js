import myAccountPage from "../pages/myAccountPage";

describe('My Account - Login', () => {
  beforeEach('Open My Account Page',()=>{
    myAccountPage.visit();
  });

  it('1. Login with valid username and password', () => {
    myAccountPage.loginForm.login("chungnd@id.vn","AutomationTest@1991")
    myAccountPage.myAccountNavigation.shouldBeVisible();
  });

  it('2. Login with incorrect username and incorrect password', () => {
    let expectedMessage = 'Error: The username incorrectUS is not registered on this site. If you are unsure of your username, try your email address instead.';
    myAccountPage.loginForm.login("incorrectUS","AutomationTest@1991")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('3. Login with correct username and empty password',()=>{
    let expectedMessage = 'Error: Password is required.';
    myAccountPage.loginForm.login("chungnd@id.vn","")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('4. Login with empty username and valid password',()=>{
    let expectedMessage = 'Error: Username is required.';
    myAccountPage.loginForm.login("","AutomationTest@1991")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('5. Login with empty username and empty password',()=>{
    let expectedMessage = 'Error: Username is required.';
    myAccountPage.loginForm.login("","")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('6. Login password should be mask',()=>{
    myAccountPage.loginForm.txtPassword().type("ChungND1@AutomationTest1991");
    myAccountPage.loginForm.txtPassword().should('not.contain.text','ChungND1@AutomationTest1991')
  });

  it('7. Login-Handles case sensitive',()=>{
    let expectedMessage = 'Error: The password you entered for the username CHUNGND@ID.VN is incorrect. Lost your password?';
    myAccountPage.loginForm.login("CHUNGND@ID.VN","AUTOMATIONTEST@1991")
    myAccountPage.errorWarning.shouldHaveMessage(expectedMessage);
  });

  it('8. Login-Authentication',()=>{
    myAccountPage.loginForm.login("chungnd@id.vn","AutomationTest@1991")
    myAccountPage.myAccountNavigation.shouldBeVisible();
    myAccountPage.myAccountNavigation.clickOnLogoutLink();
    myAccountPage.loginForm.shouldBeDisplayed();
  });
})