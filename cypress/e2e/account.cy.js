import myAccountPage from '../pages/myAccountPage';
import homePage from '../pages/homePage';
import addressPage from '../pages/addressPage';

describe('My Account - Dashboard', () => {

  beforeEach(() => {
    myAccountPage.visit();
    myAccountPage.loginForm.login("chungnd@id.vn","AutomationTest@1991");
    myAccountPage.myAccountNavigation.shouldBeVisible();
  });

  it('1. My Account - Dashboard', () => {
    myAccountPage.myAccountNavigation.clickOnDashboardLink();
  });

  it('2. My Account - Orders', () => {
    homePage.mainNavi.clickOnMyAccountMenu();
    myAccountPage.myAccountNavigation.clickOnOrdersLink();
    myAccountPage.orders.shouldBeVisible();
  });

  it('3. My Account - Orders', () => {
    myAccountPage.myAccountNavigation.clickOnOrdersLink();
    myAccountPage.orders.shouldBeVisible();
    myAccountPage.orders.clickOnAnyViewButton();
    myAccountPage.orderDetails.willBeShown();
  });

  it('4. My Account - Orders', () => {
    myAccountPage.myAccountNavigation.clickOnOrdersLink();
    myAccountPage.orders.shouldBeVisible();
    myAccountPage.orders.clickOnAnyViewButton();
    myAccountPage.orderDetails.willBeShown();
    myAccountPage.orderDetails.verifyOderNumber();
    myAccountPage.orderDetails.verifyOrderDate();
    myAccountPage.orderDetails.verifyOrderStatus();
  });

  it('5. My Account - Address Functionality', () => {
    myAccountPage.myAccountNavigation.clickOnAddressLink();
    myAccountPage.address.showBillingAndShippingAddress();
  });

  it('6. My Account - Address Functionality', () => {
    myAccountPage.myAccountNavigation.clickOnAddressLink();
    myAccountPage.address.showBillingAndShippingAddress();
    myAccountPage.address.clickOnLinkEditShippingAddress();
    addressPage.setRandomShippingAddress();
    addressPage.verifyAddressChangedSuccessfully();
  });

  it('7. My Account - Details',()=>{
    myAccountPage.myAccountNavigation.clickOnAccountDetailsLink();
    myAccountPage.accountDetails.showEditAccountForm();
  });

  it('8. My Account - Logout',()=>{
    myAccountPage.myAccountNavigation.clickOnLogoutLink();
    myAccountPage.loginForm.shouldBeDisplayed();
  });
})