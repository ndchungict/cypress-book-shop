describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a#menu-icon').then(($menu)=>{
      if ($menu.length) {
        cy.wrap($menu).click();
      }
    });
    cy.get('a').contains("Shop").click({force: true});
    cy.get('a').contains("Home").click();
  });

  it('1. Home page with three sliders only', () => {
    cy.get('div[data-slide-duration="0"] img').should('have.length', 3);
  })

  it('2. Home page with three arrivals only',()=>{
    cy.get('div.woocommerce a img').should('have.length', 3);
  })

  it('3. Home page - Images in Arrivals should navigate', () => {
    cy.get('div.woocommerce a img').first().click();
    cy.url().should('include','/product');
    cy.get('button[type="submit"]').contains('Add to basket').should('be.visible').and('be.enabled');
  });

  it('4. Home page - Arrivals-Image-Description', () => {
    cy.get('div.woocommerce a img').first().click();
    cy.url().should('include','/product');
    cy.get('button[type="submit"]').contains('Add to basket').should('be.visible').and('be.enabled');
    cy.get('li.description_tab').click();
    cy.get('li.description_tab').should('have.class','active')
  });

  it('5. Home page - Arrivals-Image-Reviews', () => {
    cy.get('div.woocommerce a img').first().click();
    cy.url().should('include','/product');
    cy.get('button[type="submit"]').contains('Add to basket').should('be.visible').and('be.enabled');
    cy.get('li.reviews_tab').click();
    cy.get('li.reviews_tab').should('have.class','active')
  });

  it('6. Home page - Arrivals-Image-Add to Basket', () => {
    cy.get('div.woocommerce a img').first().click();
    cy.url().should('include','/product');
    cy.get('button[type="submit"]').contains('Add to basket').should('be.visible').and('be.enabled');
    cy.get('span.woocommerce-Price-amount').then(($eq)=>{
      const productPrice = $eq.text();
      cy.get('button[type="submit"]').contains('Add to basket').click();
      cy.log(`Product Price is ${productPrice}`);
      cy.get('li#wpmenucartli span.cartcontents').should('have.text','1 item');
      cy.get('li#wpmenucartli span.amount').should('have.text',productPrice);
    });
  });
})