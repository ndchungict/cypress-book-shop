import myAccountPage from "../pages/myAccountPage";

describe('My Account - Registration', () => {
    beforeEach(() => {
        cy.visit('/my-account');
    });

    it('Registration - Sign in', () => {
        // myAccountPage.register("","");
    });

    it('Registration with invalid email', () => {
        let expectedMessage = 'Error: Please provide a valid email address.';
        myAccountPage.register("chungnd@invalidEmail","AutomationTest@1991");
        myAccountPage.verifyTextErrorMessage(expectedMessage);
    });

    it('Registration with empty email', () => {
        let expectedMessage = 'Error: Please provide a valid email address.';
        myAccountPage.register("","AutomationTest@1991");
        myAccountPage.verifyTextErrorMessage(expectedMessage);
    });

    it('Registration with empty password', () => {
        let expectedMessage = 'Error: Please enter an account password.';
        myAccountPage.register("chungnd@valid.email.com","");
        myAccountPage.verifyTextErrorMessage(expectedMessage);
    });

    it('Registration with empty email and password', () => {
        let expectedMessage = 'Error: Please provide a valid email address.';
        myAccountPage.register("","");
        myAccountPage.verifyTextErrorMessage(expectedMessage);
    });
})