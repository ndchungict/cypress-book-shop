import myAccountPage from "../pages/myAccountPage";

describe('My Account - Login', () => {
  beforeEach('Open My Account Page',()=>{
    cy.visit('/my-account');
  });

  it('1. Login with valid username and password', () => {
    myAccountPage.login("chungnd@id.vn","AutomationTest@1991")
    myAccountPage.verifyLoginSuccessful();
  });

  it('2. Login with incorrect username and incorrect password', () => {
    let expectedMessage = 'Error: The username incorrectUS is not registered on this site. If you are unsure of your username, try your email address instead.';
    myAccountPage.login("incorrectUS","AutomationTest@1991")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

  it('3. Login with correct username and empty password',()=>{
    let expectedMessage = 'Error: Password is required.';
    myAccountPage.login("chungnd@id.vn","")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

  it('4. Login with empty username and valid password',()=>{
    let expectedMessage = 'Error: Username is required.';
    myAccountPage.login("","AutomationTest@1991")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

  it('5. Login with empty username and empty password',()=>{
    let expectedMessage = 'Error: Username is required.';
    myAccountPage.login("","")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

  it('6. Login password should be mask',()=>{
    myAccountPage.loginForm.txtPassword().type("ChungND1@AutomationTest1991");
    myAccountPage.loginForm.txtPassword().should('not.contain.text','ChungND1@AutomationTest1991')
  });

  it('7. Login-Handles case sensitive',()=>{
    let expectedMessage = 'Error: The password you entered for the username CHUNGND@ID.VN is incorrect. Lost your password?';
    myAccountPage.login("CHUNGND@ID.VN","AUTOMATIONTEST@1991")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

  it('8. Login-Authentication',()=>{
    myAccountPage.login("chungnd@id.vn","AutomationTest@1991")
    myAccountPage.verifyLoginSuccessful();
    myAccountPage.logout();
    myAccountPage.verifyLoginFormDisplayed();
  });
})