describe('My Account - Login', () => {
    it('Login with valid username and password', () => {
        cy.visit("/my-account")
        cy.get("#username").type("avc")
        cy.get("#password").type("scs")
        // cy.get("input[name='login']").click()
    });

    it('Login with incorrect username and incorrect password', () => {
        cy.visit("/my-account")
        cy.get("#username").type("avc")
        cy.get("#password").type("scs")
        cy.get("input[name='login']").click()
        cy.get("ul[class='woocommerce-error'] li")
            .should(
                'have.value',
                'Error: The password you entered for the username avc is incorrect. Lost your password?')
    });
});