class HomePage {
    mainNavi = {
        menuShop:() => cy.get('a').contains("Shop"),
        menuMyAccount:() => cy.get('a').contains("My Account"),
    }

    navigateTo = {
        shopPage: () => this.mainNavi.menuShop().click(),
        myAccountPage:() => this.mainNavi.menuMyAccount().click(),
    }
}
module.exports = new HomePage();