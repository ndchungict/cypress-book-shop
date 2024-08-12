const {faker} = require("@faker-js/faker");

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
        inputEmail:(email) => {
            if (email !== ''){
                this.registerForm.txtEmail().type(email);
            }
        },
        inputPassword:(password) => {
            if (password !== ''){
                this.registerForm.txtPassword().type(password);
            }
        },
        clickOnRegisterButton:() =>{
            this.registerForm.btnRegister().click();
        },
        register:(email,password) =>{
            this.registerForm.inputEmail(email);
            this.registerForm.inputPassword(email);
            this.registerForm.clickOnRegisterButton();
        }
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
        clickOnOrdersLink:() => this.myAccountNavigation.linkOrders().click({ force: true }),
        clickOnLogoutLink:() => this.myAccountNavigation.linkLogout().click({ force: true }),
    };

    orders = {
        shouldBeVisible:() => cy.get('table.woocommerce-MyAccount-orders').should('be.visible'),
        btnView:() => cy.get('td.order-actions a').contains('View'),
        clickOnAnyViewButton:() => {
            this.orders.btnView().then(($el)=>{
                let rd = faker.number.int($el.length-1);
                cy.wrap($el[rd]).click();
            });
        },
    }

    orderDetails = {
        willBeShown:() => {
            cy.get('table.order_details').should('be.visible');
            cy.get('table.customer_details').should('be.visible');
            cy.get('h3').contains('Billing Address').should('be.visible');
        },
    }

}

module.exports = new MyAccountPage();