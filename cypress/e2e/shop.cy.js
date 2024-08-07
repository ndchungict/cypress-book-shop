import shopPage from '../pages/shopPage';

describe('Shop', () => {
    beforeEach(() => {
        cy.visit('/shop');
    })
    it('Shop - Filter By Price Functionality', () => {
        shopPage.filterByPrice(350,450);
        shopPage.verifyProductsPriceAfterFilter(350,450);
    })
})