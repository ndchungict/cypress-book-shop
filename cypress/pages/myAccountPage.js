class MyAccountPage {
    visit(){
        cy.visit('/my-account');
    };

    loginForm ={
        txtUsername:() => cy.get('input#username'),
        txtPassword:() => cy.get('input#password'),
        btnLogin:() => cy.get('input[value="Login"]'),
        login:(username,password) =>{
            if (username !== ''){
                this.loginForm.txtUsername().type(username);
            }

            if (password !== ''){
                this.loginForm.txtPassword().type(password);
            }

            this.loginForm.btnLogin().click({force: true});

        },
        shouldBeDisplayed:()=>{
            cy.go('back');
            this.loginForm.btnLogin().should('be.visible');
            cy.contains("Logout").should("not.exist");
        }
    };

    registerForm={
        txtEmail:() => cy.get('input#reg_email'),
        txtPassword:() =>cy.get('input#reg_password'),
        btnRegister:() => cy.get('input[value="Register"]'),
    };

    errorWarning = {
        textError:() => cy.get('ul.woocommerce-error li'),
        shouldHaveMessage:(message)=>{
            this.errorWarning.textError().should('have.text', message);
        },
    }

    myAccountNavigation = {
        shouldBeVisible:() => cy.get('nav.woocommerce-MyAccount-navigation').should('be.visible'),
        linkDashboard:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Dashboard"),
        linkOrders:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Orders"),
        linkLogout:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Logout"),
        clickOnLogoutLink:() => this.myAccountNavigation.linkLogout().click({ force: true }),
    };

    register(email,password){
        if (email !== ''){
            this.registerForm.txtEmail().type(email);
        }
        if (password !== ''){
            this.registerForm.txtPassword().type(password);
        }
        this.registerForm.btnRegister().click();
    };
}

module.exports = new MyAccountPage();