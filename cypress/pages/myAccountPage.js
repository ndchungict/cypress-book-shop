class MyAccountPage {
    loginForm ={
        txtUsername:() => cy.get('input#username'),
        txtPassword:() => cy.get('input#password'),
        btnLogin:() => cy.get('input[value="Login"]'),
    };

    registerForm={
        txtEmail:() => cy.get('input#email'),
        txtPassword:() =>cy.get('input#password'),
        btnRegister:() => cy.get('input[value="Register"]'),
    };

    errorWarning = {
        textError:() => cy.get('ul.woocommerce-error li'),
    }

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
        this.registerForm.txtEmail().type(email);
        this.registerForm.txtPassword().type(password);
        this.loginForm.btnRegister().click();
    };

    verifyTextErrorMessage(message){
        this.errorWarning.textError().should('have.text', message);
     };
}

module.exports = new MyAccountPage();