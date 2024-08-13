import myAccountPage from '../pages/myAccountPage';
import homePage from '../pages/homePage';
describe('My Account - Dashboard', () => {

  beforeEach(() => {
    myAccountPage.visit();
    myAccountPage.loginForm.login("chungnd@id.vn","AutomationTest@1991");
    myAccountPage.myAccountNavigation.shouldBeVisible();
  });

  it.skip('1. My Account - Dashboard', () => {

  });

  it.skip('2. My Account - Orders', () => {
    homePage.mainNavi.clickOnMyAccountMenu();
    myAccountPage.myAccountNavigation.clickOnOrdersLink();
    myAccountPage.orders.shouldBeVisible();
  });

  it.skip('3. My Account - Orders', () => {
    myAccountPage.myAccountNavigation.clickOnOrdersLink();
    myAccountPage.orders.shouldBeVisible();
    myAccountPage.orders.clickOnAnyViewButton();
    myAccountPage.orderDetails.willBeShown();
  });

  it('4. My Account - Orders', () => {
    myAccountPage.myAccountNavigation.clickOnOrdersLink();
    myAccountPage.orders.shouldBeVisible();
    myAccountPage.orders.clickOnAnyViewButton();
  })
})