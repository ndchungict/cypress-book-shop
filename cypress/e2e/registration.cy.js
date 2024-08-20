import myAccountPage from "../pages/myAccountPage";
import {faker} from "@faker-js/faker";

const regData =require( "../fixtures/registrationData.json");
describe('My Account - Registration', () => {

    beforeEach(() => {
        myAccountPage.visit();
    });

    it.skip('1. Registration - Sign in', () => {
        let newEmail = faker.internet.email();
        myAccountPage.registerForm.register(newEmail,"ChungND@AutomationTest1991");
        myAccountPage.myAccountNavigation.shouldBeVisible();
    });

    regData.forEach((data) => {
        it(`${data.tc_id}. ${data.tc_name}`, () => {
            myAccountPage.registerForm.register(data.email,data.password);
            myAccountPage.errorWarning.shouldHaveMessage(data.message);
        });
    })

})