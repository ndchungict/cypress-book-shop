import myAccountPage from "../pages/myAccountPage";
import {faker} from "@faker-js/faker";

const regData =require( "../fixtures/registrationData.json");
describe('My Account - Registration', () => {

    beforeEach(() => {
        cy.visit('/my-account');
    });

    it('1. Registration - Sign in', () => {
        let newEmail = faker.internet.email();
        myAccountPage.register(newEmail,"ChungND@AutomationTest1991");
        myAccountPage.verifyLoginSuccessful();
    });

    regData.forEach((data) => {
        it(`${data.tc_id}. ${data.tc_name}`, () => {
            myAccountPage.register(data.email,data.password);
            myAccountPage.verifyTextErrorMessage(data.message);
        });
    })

})