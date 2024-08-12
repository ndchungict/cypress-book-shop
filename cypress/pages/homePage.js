class HomePage {
    mainNavi = {
        menuShop:() => cy.get('a').contains("Shop"),
        menuMyAccount:() => cy.get('a').contains("My Account"),
        clickOnShopMenu: () => this.mainNavi.menuShop().click(),
        clickOnMyAccountMenu:() => this.mainNavi.menuMyAccount().click(),
    }
}
module.exports = new HomePage();