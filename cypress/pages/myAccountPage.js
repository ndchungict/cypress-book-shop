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
        linkLogout:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Logout"),
        clickOnDashboardLink:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Dashboard"),
        clickOnOrdersLink:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Orders").click(),
        clickOnAddressLink:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Addresses").click(),
        clickOnAccountDetailsLink:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Account Details").click(),
        clickOnLogoutLink:() => this.myAccountNavigation.linkLogout().click({ force: true }),
    };

    orders = {
        shouldBeVisible:() => cy.get('table.woocommerce-MyAccount-orders').should('be.visible'),
        orderNumber:() =>cy.get('td.order-number a'),
        orderDate:() =>cy.get('td.order-date time'),
        orderStatus:() =>cy.get('td.order-status'),
        btnView:() => cy.get('td.order-actions a').contains('View'),
        clickOnAnyViewButton:()=>{
            this.orders.btnView().then(($el)=>{
                let rd = faker.number.int($el.length-1);
                this.orders.orderNumber().eq(rd).as('orderNumber');
                this.orders.orderDate().eq(rd).as('orderDate');
                this.orders.orderStatus().eq(rd).as('orderStatus');
                cy.wrap($el[rd]).click();
            });
        },

    }

    orderDetails = {
        orderNumber:() =>cy.get('mark.order-number'),
        orderDate:() =>cy.get('mark.order-date'),
        orderStatus:() =>cy.get('mark.order-status'),
        willBeShown:() => {
            cy.get('table.order_details').should('be.visible');
            cy.get('table.customer_details').should('be.visible');
            cy.get('h3').contains('Billing Address').should('be.visible');
        },
        verifyOderNumber:() =>{
            this.orderDetails.orderNumber().then(($el)=>{
                cy.get('@orderNumber').should('have.text',$el.text());
            });
        },
        verifyOrderDate:() =>{
            this.orderDetails.orderDate().then(($el)=>{
                cy.get('@orderDate').should('have.text',$el.text());
            });
        },
        verifyOrderStatus:() =>{
            this.orderDetails.orderStatus().then(($el)=>{
                cy.get('@orderStatus').should('have.text',$el.text());
            });
        },
    }

    address = {
        linkEditBillingAddress:() => cy.get('a.edit[href*="billing"]'),
        linkEditShippingAddress:() => cy.get('a.edit[href*="shipping"]'),
        showBillingAndShippingAddress:() =>{
            this.address.linkEditBillingAddress().should('be.visible');
            this.address.linkEditShippingAddress().should('be.visible');
        },
        clickOnLinkEditShippingAddress:() => this.address.linkEditShippingAddress().click({ force: true }),
        clickOnLinkEditBillingAddress:() => this.address.linkEditBillingAddress().click({ force: true }),
    }

    accountDetails = {
        showEditAccountForm:() => cy.get('.woocommerce-EditAccountForm').should('be.visible'),
    }

}

module.exports = new MyAccountPage();