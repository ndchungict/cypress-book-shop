import myAccountPage from "../pages/myAccountPage";

const regData =require( "../fixtures/registrationData.json");

describe('My Account - Registration', () => {

    beforeEach(() => {
        cy.visit('/my-account');
    });

    it('Registration - Sign in', () => {
        // myAccountPage.register("","");
    });

    regData.forEach((data) => {
        it(data.tc_name, () => {
            myAccountPage.register(data.email,data.password);
            myAccountPage.verifyTextErrorMessage(data.message);
        });
    })

})