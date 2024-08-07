class ShopPage {
    filterWidget ={
        btnFilter:() => cy.get('button[type="submit"]').contains('Filter'),
        minPriceText:()=>cy.get('input#min_price'),
        maxPriceText:()=>cy.get('input#max_price'),
    };

    products={
        price:()=>cy.get('span.price').find('span.woocommerce-Price-amount').parent().not('del').find('span.woocommerce-Price-amount'),
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
}
module.exports = new ShopPage();