import myAccountPage from "../pages/myAccountPage";

describe('My Account - Login', () => {
  beforeEach('Open My Account Page',()=>{
    cy.visit('/my-account');
  });

  it('passes', () => {
    myAccountPage.login("abc","sfv")
    myAccountPage.verifyTextErrorMessage("Error: The password you entered for the username abc is incorrect. Lost your password?")
  })

})