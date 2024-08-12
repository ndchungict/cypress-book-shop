import shopPage from '../pages/shopPage';
import productPage from '../pages/productPage';

describe('Shop', () => {
    beforeEach(() => {
        cy.visit('/shop');
    });

    it('1. Shop - Filter By Price Functionality', () => {
        shopPage.filterByPrice(350,450);
        shopPage.verifyProductsPriceAfterFilter(350,450);
    });

    it('2. Shop - product Categories Functionality', () => {
        shopPage.clickAnyOfProductLinks();
        productPage.verifyOnlyParticularProductWillBeShown();
    });

    it('3. Shop - Default Sorting Functionality', () => {
        shopPage.selectSort.byDefault();

    });

    it('4. Shop - Default Sorting Functionality', () => {
        shopPage.selectSort.byAverageRating();

    });

    it('5. Shop - Default Sorting Functionality', () => {
        shopPage.selectSort.byNewness();

    });

    it('6. Shop - Default Sorting Functionality', () => {
        shopPage.selectSort.byPriceLowToHigh();

    });

    it('7. Shop - Default Sorting Functionality', () => {
        shopPage.selectSort.byPriceHighToLow();

    });
})