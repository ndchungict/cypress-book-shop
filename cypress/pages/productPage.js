class ProductPage {
   product = {
       title:()=>cy.get('h1[itemprop="name"]'),
       price:()=>cy.get('meta[itemprop="price"]'),
       currency:()=>cy.get('meta[itemprop="priceCurrency"]'),
       description:()=>cy.get('div[itemprop="description"] p'),
       quantity:()=>cy.get('input[name="quantity"]'),
       btnAddToBasket:()=>cy.get('button.single_add_to_cart_button'),
   }

    verifyOnlyParticularProductWillBeShown(){
        this.product.title().should('be.visible');
        this.product.description().should('be.visible');
    }
}

module.exports = new ProductPage();