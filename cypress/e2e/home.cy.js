describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('')
  });

  it('Home page with three sliders only', () => {
    cy.get('a#menu-icon').then(($menu)=>{
      if ($menu.length) {
        cy.wrap($menu).click();
      }
    });
    cy.get('a').contains("Shop").click({force: true});
    cy.get('a').contains("Home").click();
    cy.get('div[data-slide-duration="0"] img').should('have.length', 3);
  })

  it('Home page with three arrivals only',()=>{
    cy.get('a#menu-icon').then(($menu)=>{
      if ($menu.length) {
        cy.wrap($menu).click();
      }
    });
    cy.get('a').contains("Shop").click({force: true});
    cy.get('a').contains("Home").click();
    cy.get('div.woocommerce a img').should('have.length', 3);
  })
})