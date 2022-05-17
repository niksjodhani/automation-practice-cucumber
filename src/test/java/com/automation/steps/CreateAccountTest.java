package com.automation.steps;

import com.automation.pages.AccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import static com.automation.utility.Utility.getRandomString;

public class CreateAccountTest {

    public static String email = getRandomString(5) + "@gmail.com";


    @And("^I enter email$")
    public void iEnterEmail() {

        new SignInPage().setCreateEmail(email);
    }

    @And("^I click on create an accountbutton$")
    public void iClickOnCreateAnAccountbutton() {
        new SignInPage().clickOnCreateNewAccount();
    }

    @Then("^I Should navigate to CREATE AN ACCOUNT successfully$")
    public void iShouldNavigateToCREATEANACCOUNTSuccessfully() {
        String expectedMessage = "CREATE AN ACCOUNT";
        Assert.assertEquals("Page Not Found", expectedMessage, new AccountPage().getCreateAnAccounttext());
    }

    @And("^I Select Gender$")
    public void iSelectGender() {
        new AccountPage().selectMrRadio();
    }
    @And("^I Enter FirstName$")
    public void iEnterFirstName() {
        new AccountPage().setFirstnameField("Ramesh");
    }

    @And("^I Enter LastName$")
    public void iEnterLastName() {
        new AccountPage().setLastnameField("kothari");
    }



    @And("^I enter Password$")
    public void iEnterPassword() {
        new AccountPage().setPasswordField("prime@123");
    }

    @And("^I Enter FirstNameAdd$")
    public void iEnterFirstNameAdd() {
        new AccountPage().setFirstnameAdd("Ramesh");
    }

    @And("^I Enter LastNameAdd$")
    public void iEnterLastNameAdd() {
        new AccountPage().setLastnameAdd("Kothari");
    }

    @And("^I Enter Address$")
    public void iEnterAddress() {
        new AccountPage().setAddress("52 london road");
    }

    @And("^I Enter city$")
    public void iEnterCity() {
        new AccountPage().setCityField("Newalska");
    }

    @And("^I Select State$")
    public void iSelectState() {
        new AccountPage().selectState("Alaska");
    }

    @And("^I Enter ZipCode$")
    public void iEnterZipCode() {
        new AccountPage().setZipCode("01234");
    }

    @And("^I Select Country$")
    public void iSelectCountry() {
        new AccountPage().selectCountry("United States");
    }

    @And("^I Enter MobileNum$")
    public void iEnterMobileNum() {
        new AccountPage().setMobileNum("7777788888");
    }

    @And("^I Enter FutureReference$")
    public void iEnterFutureReference() {
        new AccountPage().setFutureReference("xyz");
    }

    @And("^I click on RegisterButton$")
    public void iClickOnRegisterButton() {
        new AccountPage().clickOnRegisterButton();
    }

    @Then("^I Should navigate to MyAccount  page successfully$")
    public void iShouldNavigateToMyAccountPageSuccessfully() {
        String expectedText = "MY ACCOUNT";
       Assert.assertEquals("account not created",expectedText,new AccountPage().getMyAccountText());
    }
}
