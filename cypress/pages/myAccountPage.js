class MyAccountPage {
    loginForm ={
        txtUsername:() => cy.get('input#username'),
        txtPassword:() => cy.get('input#password'),
        btnLogin:() => cy.get('input[value="Login"]'),
    };

    registerForm={
        txtEmail:() => cy.get('input#reg_email'),
        txtPassword:() =>cy.get('input#reg_password'),
        btnRegister:() => cy.get('input[value="Register"]'),
    };

    errorWarning = {
        textError:() => cy.get('ul.woocommerce-error li'),
    }

    myAccountNavigation = {
        linkDashboard:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Dashboard"),
        linkOrders:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Orders"),
        linkLogout:() => cy.get('nav.woocommerce-MyAccount-navigation ul li a').contains("Logout"),

    };

    login(username,password){
        if (username !== ''){
            this.loginForm.txtUsername().type(username);
        }

        if (password !== ''){
            this.loginForm.txtPassword().type(password);
        }

        this.loginForm.btnLogin().click();
    };

    register(email,password){
        if (email !== ''){
            this.registerForm.txtEmail().type(email);
        }
        if (password !== ''){
            this.registerForm.txtPassword().type(password);
        }
        this.loginForm.btnRegister().click();
    };

    verifyTextErrorMessage(message){
        this.errorWarning.textError().should('have.text', message);
    };

    verifyLoginSuccessful(){
        this.myAccountNavigation.linkLogout().should('be.visible');
    }
}

module.exports = new MyAccountPage();