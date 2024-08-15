import {faker} from "@faker-js/faker";
class AddressPage {
    shippingAddress =  {
        inputFirstName:(firstName) => cy.get('#shipping_first_name').type(firstName),
        inputLastName:(lastName) => cy.get('#shipping_last_name').type(lastName),
        inputCompanyName:(companyName) => cy.get('#shipping_company').type(companyName),
        selectCountry:(countryName) => {
            cy.get('#s2id_shipping_country').click();
            cy.get('input#s2id_autogen1_search').type(countryName);
            cy.get('span').contains(countryName).click({ force: true });
        },
        inputStreet:(streetName) => cy.get('#shipping_address_1').type(streetName),
        inputApartment:(apartment)=> cy.get('#shipping_address_2').type(apartment),
        inputCity:(city)=> cy.get('#shipping_city').type(city),
        inputState:(state)=> cy.get('#shipping_state').type(state),
        selectRegion:(region)=> {
            cy.get('#shipping_region').type(region)
        },
        inputPostCode:(postCode)=> cy.get('#shipping_postcode').type(postCode),
        clickOnBtnSave:() => cy.get('input.button[name="save_address"]').click({ force: true }),
    };

    setRandomShippingAddress(){
        this.shippingAddress.inputFirstName(faker.person.firstName());
        this.shippingAddress.inputLastName(faker.person.lastName());
        this.shippingAddress.inputCompanyName(faker.company.name());
        this.shippingAddress.selectCountry('Haiti');
        this.shippingAddress.inputStreet(faker.location.street());
        this.shippingAddress.inputApartment(faker.location.buildingNumber());
        this.shippingAddress.inputCity(faker.location.city());
        this.shippingAddress.inputState(faker.location.state());
        this.shippingAddress.inputPostCode(faker.location.zipCode());
        this.shippingAddress.clickOnBtnSave();
    };

    verifyAddressChangedSuccessfully(){
        cy.get('div').contains('Address changed successfully.').should('be.visible', 1);
    }
}
module.exports = new AddressPage();