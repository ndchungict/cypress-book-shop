import LoginPage from "../models/pages/LoginPage";

describe('My Account - Login', () => {
    // it('Login with valid username and password', () => {
    //     cy.visit("/my-account")
    //     cy.get("#username").type("avc")
    //     cy.get("#password").type("scs")
    //     // cy.get("input[name='login']").click()
    // });

    it('Login with incorrect username and incorrect password', () => {
        let loginPage = new LoginPage();
        let username = "incorrect";
        let password = "incorrect";
        loginPage.open()
        loginPage.login(username,password)
        loginPage.verifyUserIsNotRegisteredError(username)
    });
});