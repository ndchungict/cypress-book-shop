const {faker} = require("@faker-js/faker");

class ShopPage {
    filterWidget ={
        btnFilter:() => cy.get('button[type="submit"]').contains('Filter'),
        minPriceText:()=>cy.get('input#min_price'),
        maxPriceText:()=>cy.get('input#max_price'),
    };

    products={
        link:() => cy.get('a.woocommerce-LoopProduct-link'),
        name:() => this.products.link().find('h3'),
        price:()=>cy.get('span.price').find('span.woocommerce-Price-amount').parent().not('del').find('span.woocommerce-Price-amount'),
    }

    ddlSort(){
        return cy.get('form.woocommerce-ordering select');
    }

    filterByPrice(minPrice,maxPrice){
      this.filterWidget.minPriceText().invoke('val',minPrice);
      this.filterWidget.maxPriceText().invoke('val',maxPrice);
      this.filterWidget.btnFilter().click();
    };

    verifyProductsPriceAfterFilter(minPrice,maxPrice){
        this.products.price().each(($el)=> {
            const price = parseFloat($el.text().substring(1, $el.text().length));
            cy.log(`Price = ${price}`);
            expect(price).to.gte(minPrice);
            expect(maxPrice).to.gte(price);
        });
    };

    clickAnyOfProductLinks(){
        this.products.link().then(($el)=> {
            let rd= faker.number.int($el.length-1);
            cy.wrap($el[rd]).click();
        })
    }

    selectSort = {
        byDefault: () => this.ddlSort().select('menu_order'),
        byPopularity:() => this.ddlSort().select('popularity'),
        byAverageRating:() => this.ddlSort().select('rating'),
        byNewness:() => this.ddlSort().select('date'),
        byPriceLowToHigh:() => this.ddlSort().select('price'),
        byPriceHighToLow:() => this.ddlSort().select('price-desc'),
    }
}
module.exports = new ShopPage();