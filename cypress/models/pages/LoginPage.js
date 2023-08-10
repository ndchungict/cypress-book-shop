const TEXTBOX_USERNAME = "#username";
const TEXTBOX_PASSWORD = "#password";
const BUTTON_LOGIN = "input[name='login']";
const TEXT_WOOCOMMERCE_ERROR = "ul[class='woocommerce-error'] li";

class LoginPage {
    open(){
        cy.visit("/my-account")
    }

    login(username, password){
        cy.get(TEXTBOX_USERNAME).type(username)
        cy.get(TEXTBOX_PASSWORD).type(password)
        cy.get(BUTTON_LOGIN).click()
    }

    verifyUserIsNotRegisteredError(username){
        let message = `Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`
        cy.log(message)
        cy.get(TEXT_WOOCOMMERCE_ERROR).should("have.value",message)
    }
}

module.exports = LoginPage;