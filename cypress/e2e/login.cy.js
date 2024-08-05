import myAccountPage from "../pages/myAccountPage";

describe('My Account - Login', () => {
  beforeEach('Open My Account Page',()=>{
    cy.visit('/my-account');
  });

  it('Login with valid username and password', () => {
    myAccountPage.login("chungnd@id.vn","AutomationTest@1991")
    myAccountPage.verifyLoginSuccessful();
  });

  it('Login with incorrect username and incorrect password', () => {
    let expectedMessage = 'Error: The username incorrectUS is not registered on this site. If you are unsure of your username, try your email address instead.';
    myAccountPage.login("incorrectUS","AutomationTest@1991")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

  it('Login with correct username and empty password',()=>{
    let expectedMessage = 'Error: Password is required.';
    myAccountPage.login("chungnd@id.vn","")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

  it('Login with empty username and valid password',()=>{
    let expectedMessage = 'Error: Username is required.';
    myAccountPage.login("","AutomationTest@1991")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

  it('Login with empty username and empty password',()=>{
    let expectedMessage = 'Error: Username is required.';
    myAccountPage.login("","")
    myAccountPage.verifyTextErrorMessage(expectedMessage);
  });

})