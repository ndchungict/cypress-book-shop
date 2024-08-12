import myAccountPage from '../pages/myAccountPage';
import homePage from '../pages/homePage';
describe('My Account - Dashboard', () => {
  beforeEach(() => {
    cy.visit('/my-account');
    myAccountPage.login("chungnd@id.vn","AutomationTest@1991");
    myAccountPage.verifyLoginSuccessful();
  });

  it('1. My Account-Dashboard', () => {
    homePage.navigateTo.shopPage()
    homePage.navigateTo.myAccountPage();
    myAccountPage.verifyLoginSuccessful();
  })
})