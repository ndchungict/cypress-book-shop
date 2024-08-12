import myAccountPage from '../pages/myAccountPage';
import homePage from '../pages/homePage';
describe('My Account - Dashboard', () => {

  beforeEach(() => {
    myAccountPage.visit();
    myAccountPage.loginForm.login("chungnd@id.vn","AutomationTest@1991");

  });

  it('1. My Account-Dashboard', () => {

  })
})